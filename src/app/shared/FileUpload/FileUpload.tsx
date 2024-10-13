'use client';
import React, { useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

interface FileUploadProps {
	onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
	const [dragActive, setDragActive] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleClick = () => {
		fileInputRef.current?.click();
	};
	const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			onFileSelect(e.dataTransfer.files[0]);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			onFileSelect(e.target.files[0]);
		}
	};

	return (
		<div
			onClick={handleClick}
			className={`transition-300 flex h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-2 transition-colors hover:border-info ${
				dragActive ? 'border-blue-500' : 'border-gray-300'
			}`}
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<FaTrash className="mb-2 text-xl text-gray-400" />
			<p className="text-center text-blue-500">Загрузите файл или перетащите</p>
			<p className="mt-1 text-center text-sm text-gray-500">PNG, JPEG, GIF, WEBP</p>
			<p className="mt-1 text-center text-xs text-gray-400">Рекомендуемый размер: 640x640 (1:1)</p>
			<input
				ref={fileInputRef}
				type="file"
				className="hidden"
				onChange={handleChange}
				accept="image/png,image/jpeg,image/gif,image/webp"
			/>
		</div>
	);
};

export default FileUpload;
