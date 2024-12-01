'use client';
import FileUpload from '@/app/shared/FileUpload/FileUpload';
import React from 'react';
import { useMyAvatarCrop } from '../hooks/useMyAvatarCrop';
import ModalContainer from '@/app/shared/ModalWindow/ModalWindow';
import Image from 'next/image';
import { Button } from '@/app/shared/Button/Button';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useAvatarMutation } from './hooks/useAvatarMutation';
import { toast } from 'sonner';

const MyAvatarCrop = () => {
	const {
		onSelectFile,
		isModalOpen,
		PreviewSizes,
		imgRef,
		closeModal,
		imageUrl,
		error,
		updatePreview,
		previewsRefs,
		crop,
		setCrop,
		onImageLoad
	} = useMyAvatarCrop();
	const { mutate: uploadAvatar, isPending } = useAvatarMutation();

	const handleUpload = async () => {
		if (!imgRef.current || !crop) return;

		// Create a high-resolution canvas for the upload
		const uploadCanvas = document.createElement('canvas');
		const ctx = uploadCanvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size to 512x512 (or your preferred size)
		const UPLOAD_SIZE = 512;
		uploadCanvas.width = UPLOAD_SIZE;
		uploadCanvas.height = UPLOAD_SIZE;

		const image = imgRef.current;
		const scaleX = image.naturalWidth / 100;
		const scaleY = image.naturalHeight / 100;

		// Apply high-quality settings
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = 'high';

		// Create circular crop
		ctx.save();
		ctx.beginPath();
		ctx.arc(UPLOAD_SIZE / 2, UPLOAD_SIZE / 2, UPLOAD_SIZE / 2, 0, 2 * Math.PI);
		ctx.clip();

		// Draw the cropped image
		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			UPLOAD_SIZE,
			UPLOAD_SIZE
		);
		ctx.restore();

		// Convert to blob with maximum quality
		const croppedImageBlob = await new Promise<Blob | null>((resolve) => {
			uploadCanvas.toBlob(
				(blob) => {
					resolve(blob);
				},
				'image/png',
				1.0
			);
		});

		if (!croppedImageBlob) {
			toast.error('Failed to process image');
			return;
		}

		uploadAvatar(croppedImageBlob, {
			onSuccess: () => {
				toast.success('Avatar updated successfully');
				closeModal();
			},
			onError: (error) => {
				toast.error('Failed to update avatar');
				console.error('Error uploading avatar:', error);
			}
		});
	};

	return (
		<div>
			<FileUpload onFileSelect={onSelectFile} />
			{error ? (
				<p className="text-error">{error}</p>
			) : (
				<ModalContainer isOpen={isModalOpen} onClose={closeModal}>
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="flex-grow">
							<ReactCrop
								crop={crop}
								onChange={(_, percentCrop) => {
									setCrop(percentCrop);
									updatePreview(percentCrop);
								}}
								keepSelection
								circularCrop
								aspect={1}
								minWidth={150}
							>
								<Image
									ref={imgRef}
									src={imageUrl}
									alt="Avatar preview"
									width={600}
									height={600}
									quality={100}
									onLoad={onImageLoad}
								/>
							</ReactCrop>
						</div>
						<div className="flex flex-col gap-4">
							{Object.entries(PreviewSizes).map(([key, size]) => (
								<div key={key}>
									<h3 className="mb-2 text-sm font-medium">{`${size}x${size} Preview`}</h3>
									<canvas
										ref={(el) => (previewsRefs.current[key] = el)}
										style={{
											width: `${size}px`,
											height: `${size}px`,

											borderRadius: '50%',
											overflow: 'hidden'
										}}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="mt-4 flex w-full justify-between">
						<Button onClick={closeModal} className="w-[48%]">
							Закрыть
						</Button>
						<Button onClick={handleUpload} className="w-[48%]" disabled={isPending}>
							{isPending ? 'Uploading...' : 'Set Avatar'}
						</Button>
					</div>
				</ModalContainer>
			)}
		</div>
	);
};

export default MyAvatarCrop;
