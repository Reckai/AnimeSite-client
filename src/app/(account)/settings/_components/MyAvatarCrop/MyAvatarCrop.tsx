'use client';
import FileUpload from '@/app/shared/FileUpload/FileUpload';
import React from 'react';
import { useMyAvatarCrop } from '../hooks/useMyAvatarCrop';
import ModalContainer from '@/app/shared/ModalWindow/ModalWindow';
import Image from 'next/image';
import { Button } from '@/app/shared/Button/Button';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
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
						<Button onClick={() => console.log(crop)} className="w-[48%]">
							Установить аватар
						</Button>
					</div>
				</ModalContainer>
			)}
		</div>
	);
};

export default MyAvatarCrop;
