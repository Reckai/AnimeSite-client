import { useState, useRef, useCallback, useMemo } from 'react';
import { Crop, PercentCrop, centerCrop, makeAspectCrop } from 'react-image-crop';

interface UseAvatarCropOptions {
	minWidth?: number;
	aspectRatio?: number;
	initialCropWidth?: number;
}

interface PreviewSizes {
	[key: string]: number;
}

export const useAvatarCrop = ({
	minWidth = 150,
	aspectRatio = 1,
	initialCropWidth = 90
}: UseAvatarCropOptions = {}) => {
	const [image, setImage] = useState<string>('');
	const [crop, setCrop] = useState<Crop>();
	const [error, setError] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const imgRef = useRef<HTMLImageElement>(null);
	const previewRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});

	const previewSizes: PreviewSizes = useMemo(
		() => ({
			large: 128,
			small: 40
		}),
		[]
	);

	const openModal = useCallback(() => setIsModalOpen(true), []);
	const closeModal = useCallback(() => {
		setIsModalOpen(false);
		setError('');
	}, []);

	const onSelectFile = useCallback(
		(file: File | null): void => {
			if (!file) return;
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				const imageUrl = reader.result?.toString() || '';
				setImage(imageUrl);
				setError('');
				openModal();
			});
			reader.readAsDataURL(file);
		},
		[openModal]
	);

	const updatePreview = useCallback(
		(crop: PercentCrop) => {
			if (!crop || !imgRef.current) return;

			const image = imgRef.current;
			const scaleX = image.naturalWidth / 100;
			const scaleY = image.naturalHeight / 100;

			Object.entries(previewSizes).forEach(([key, size]) => {
				const canvas = previewRefs.current[key];
				if (!canvas) return;

				const ctx = canvas.getContext('2d');
				if (!ctx) return;

				canvas.width = size;
				canvas.height = size;

				ctx.imageSmoothingQuality = 'high';
				ctx.save();
				ctx.beginPath();
				ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
				ctx.clip();

				ctx.drawImage(
					image,
					crop.x * scaleX,
					crop.y * scaleY,
					crop.width * scaleX,
					crop.height * scaleY,
					0,
					0,
					size,
					size
				);

				ctx.restore();
			});
		},
		[previewSizes]
	);

	const onImageLoad = useCallback(
		(e: React.SyntheticEvent<HTMLImageElement>) => {
			const { width, height, naturalWidth, naturalHeight } = e.currentTarget;

			if (naturalWidth < minWidth || naturalHeight < minWidth) {
				setError(`Image is too small. Minimum size is ${minWidth}x${minWidth} pixels.`);
				return;
			}

			const crop = makeAspectCrop(
				{
					unit: '%',
					width: initialCropWidth
				},
				aspectRatio,
				width,
				height
			);
			const centered = centerCrop(crop, height, width);
			setCrop(centered);
			updatePreview(centered);
		},
		[aspectRatio, initialCropWidth, minWidth, updatePreview]
	);

	return {
		image,
		crop,
		error,
		isModalOpen,
		imgRef,
		previewRefs,
		previewSizes,
		onSelectFile,
		closeModal,
		updatePreview,
		onImageLoad,
		setCrop
	};
};
