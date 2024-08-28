import React from 'react';
import { cn } from '../../utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => (
		<div
			className={cn(
				'relative h-9 w-full cursor-text justify-center rounded border-[1px] border-color-text-accent bg-transparent px-2 text-color-text hover:border-[1px] hover:border-primary dark:border-form-color dark:bg-form-color',
				className
			)}
		>
			<input
				type={type}
				className={'h-full w-full border-none bg-transparent py-3 outline-0 dark:bg-form-color'}
				ref={ref}
				{...props}
			/>
		</div>
	)
);
Input.displayName = 'Input';

export { Input };
