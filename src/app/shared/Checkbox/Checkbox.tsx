'use client';
import * as React from 'react';
import { cn } from '../../utils';

export type CheckboxState = 'empty' | 'include' | 'exclude';

interface CheckboxProps {
	className?: string;
	state: CheckboxState;
}

const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(({ className, state }, ref) => {
	return (
		<span
			ref={ref}
			className={cn(
				's inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded border bg-white transition-colors dark:border-form-color',
				'duration-300',
				state === 'empty' && 'hover:border-primary dark:bg-form-color',
				state === 'include' && 'border-primary bg-primary',
				state === 'exclude' && 'border-error bg-error',
				'relative min-h-[20px]',
				className
			)}
		>
			<span className="absolute inset-0 flex items-center justify-center">
				{state === 'include' && (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="pointer-events-none"
					>
						<path
							d="M10 3L4.5 8.5L2 6"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
				{state === 'exclude' && (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="pointer-events-none"
					>
						<path
							d="M9 3L3 9M3 3L9 9"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</span>
		</span>
	);
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
