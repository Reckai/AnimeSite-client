'use client';

import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center   whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white hover:bg-primary/90',
				primaryLink: 'text-primary p-2 hover:bg-primary/20',
				destructive: 'bg-error/20 text-error hover:bg-error/30',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'dark:bg-transparent dark:hover:text-white  justify-start hover:bg-secondary/5 dark:text-color-text dark:hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				thirdly:
					'dark:hover:bg-secondary text-color-text bg-gray-400/30  hover:bg-gray-400/60   dark:hover:text-white transition duration-300'
			},
			size: {
				link: 'h-9 p-0 m-0',
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3 py-2',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => (
		<button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
	)
);
Button.displayName = 'Button';

export { Button, buttonVariants };
