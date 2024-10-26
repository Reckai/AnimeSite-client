import {  useCallback, useMemo, useRef, useState } from 'react';
import { centerCrop, Crop, makeAspectCrop, PercentCrop } from 'react-image-crop';

type PreviewSizes ={
	[key: string]: number;
}

export const useMyAvatarCrop = () => {
	const MIN_WIDTH = 150;
	const ASPECT_RATIO = 1;
	const TOO_SMALL_IMAGE_EM = `Image is too small, it must be at least ${MIN_WIDTH}x${MIN_WIDTH} `;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [error, setError] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [crop, setCrop] = useState<Crop>();
	const imgRef = useRef<HTMLImageElement>(null);
	const previewsRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});

	const PreviewSizes: PreviewSizes = useMemo(
		() => ({
			large: 128,
			small: 40
		}),
		[]
	);

	const openModal = useCallback(() => setIsModalOpen(true), []);
	const closeModal = useCallback(() => setIsModalOpen(false), []);

	const updatePreview = useCallback(
		(crop: PercentCrop) => {
			if (!crop || !imgRef.current) return;

			const image = imgRef.current;
			const scaleY = image.naturalHeight / 100;
			const scaleX = image.naturalWidth / 100;

			Object.entries(PreviewSizes).forEach(([key, size]) => {
				const canvas = previewsRefs.current[key];
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
		[PreviewSizes]
	);

	const onSelectFile = (file: File) => {
		if (!file) return;

		const reader = new FileReader();
		reader.addEventListener('load', () => {
			const img = reader.result?.toString() || '';
			const newImage = new Image();
			newImage.src = img;
			newImage.addEventListener('load', () => {
				if (error) setError('');
				const { naturalHeight, naturalWidth } = newImage;
				console.log(naturalHeight, naturalWidth);
				if (naturalHeight < MIN_WIDTH || naturalWidth < MIN_WIDTH) {
					setError(TOO_SMALL_IMAGE_EM);
					setImageUrl('');
					return;
				}
			});
			setImageUrl(img);
			openModal();
		});
		reader.readAsDataURL(file);
	};

	const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
		const { width, height } = e.currentTarget;
		const cropWidthInPercent = (MIN_WIDTH / width) * 100;

		const crop = makeAspectCrop(
			{
				unit: '%',
				width: cropWidthInPercent
			},
			ASPECT_RATIO,
			width,
			height
		);
		const centeredCrop = centerCrop(crop, width, height);
		setCrop(centeredCrop);
		updatePreview(centeredCrop);
	};

	return {
		error,
		isModalOpen,
		imageUrl,
		MIN_WIDTH,
		crop,
		ASPECT_RATIO,
		onSelectFile,
		updatePreview,
		imgRef,
		previewsRefs,
		PreviewSizes,
		onImageLoad,
		openModal,
		closeModal,
		setError,
		setImageUrl,
		setCrop
	};
};
