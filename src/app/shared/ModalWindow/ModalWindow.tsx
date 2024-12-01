'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalContainerProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, isOpen, onClose }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!mounted || !isOpen) return null;

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			<div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
			<div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg dark:bg-color-el-bg">
				{children}
			</div>
		</div>,
		document.getElementById('modal-container') as HTMLElement
	);
};

export default ModalContainer;
