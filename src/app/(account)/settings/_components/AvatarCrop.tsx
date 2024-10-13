import React from 'react';
import Image from 'next/image';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useAvatarCrop } from './hooks/useAvatarCrop';
import FileUpload from '@/app/shared/FileUpload/FileUpload';
import ModalContainer from '@/app/shared/ModalWindow/ModalWindow';
import { Button } from '@/app/shared/Button/Button';

const AvatarCrop: React.FC = () => {
	const {
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
	} = useAvatarCrop();

	return (
		<div>
			<FileUpload onFileSelect={onSelectFile} />
			<ModalContainer isOpen={isModalOpen} onClose={closeModal}>
				{error ? (
					<p className="mb-4 text-error">{error}</p>
				) : (
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
									src={image}
									alt="Avatar preview"
									width={600}
									height={600}
									onLoad={onImageLoad}
								/>
							</ReactCrop>
						</div>
						<div className="flex flex-col gap-4">
							{Object.entries(previewSizes).map(([key, size]) => (
								<div key={key}>
									<h3 className="mb-2 text-sm font-medium">{`${size}x${size} Preview`}</h3>
									<canvas
										ref={(el) => (previewRefs.current[key] = el)}
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
				)}
				<Button onClick={closeModal} className="mt-4">
					Close
				</Button>
			</ModalContainer>
		</div>
	);
};

export default AvatarCrop;
