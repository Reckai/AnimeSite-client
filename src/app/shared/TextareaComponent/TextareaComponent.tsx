import React from 'react';
import { cn } from '../../utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => (
		<textarea
			className={cn(
				'min-h-[100px] w-full rounded border border-color-text-accent p-2',
				'resize-y bg-transparent text-color-text',
				'hover:border-primary focus:border-primary focus:outline-none',
				'dark:border-form-color dark:bg-form-color',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
);

Textarea.displayName = 'Textarea';

export { Textarea };
