'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils';

const toggleVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-transparent hover:bg-[rgba(113,121,155,0.3)] data-[state=on]:bg-[rgba(113,121,155,0.15)]',
				outline:
					'border border-input bg-transparent hover:bg-[rgba(113,121,155,0.4)] hover:text-accent-foreground data-[state=on]:bg-[rgba(113,121,155,0.4)] data-[state=on]:text-accent-foreground'
			},
			size: {
				default: 'h-10 px-3',
				sm: 'h-9 px-2.5',
				lg: 'h-11 px-5'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export interface ToggleProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof toggleVariants> {
	pressed?: boolean;
	onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
	({ className, variant, size, pressed, onPressedChange, ...props }, ref) => {
		const [isPressed, setIsPressed] = React.useState(pressed || false);

		React.useEffect(() => {
			if (pressed !== undefined) {
				setIsPressed(pressed);
			}
		}, [pressed]);

		const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			const newPressed = !isPressed;
			setIsPressed(newPressed);
			onPressedChange?.(newPressed);
			props.onClick?.(event);
		};

		return (
			<button
				ref={ref}
				type="button"
				aria-pressed={isPressed}
				data-state={isPressed ? 'on' : 'off'}
				className={cn(toggleVariants({ variant, size, className }))}
				onClick={handleClick}
				{...props}
			/>
		);
	}
);

Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants };
