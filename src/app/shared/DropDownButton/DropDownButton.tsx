import { cn } from '@/app/utils';
import React from 'react';

interface DropDownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	clickHandler: () => void;
}

function DropDownButton({ text, clickHandler, className, disabled }: DropDownButtonProps) {
	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			className={cn(
				'items-center p-2 hover:rounded-md hover:bg-slate-500/20 dark:hover:bg-form-color dark:hover:text-white',
				className
			)}
		>
			<span className="mx-2">{text}</span>
		</button>
	);
}

export default DropDownButton;
