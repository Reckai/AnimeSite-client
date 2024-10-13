'use client';

import * as React from 'react';
import { cn } from '@/app/utils';
import { Toggle, ToggleProps } from '../Toggle/Toggle';

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: 'single' | 'multiple';
	value?: string | string[];
	onValueChange?: (value: string | string[]) => void;
	children: React.ReactElement<ToggleProps>[];
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
	({ className, type = 'single', value, onValueChange, children, ...props }, ref) => {
		const [selectedValues, setSelectedValues] = React.useState<string[]>(
			Array.isArray(value) ? value : value ? [value] : []
		);

		React.useEffect(() => {
			if (value !== undefined) {
				setSelectedValues(Array.isArray(value) ? value : [value]);
			}
		}, [value]);

		const handleToggle = (toggleValue: string) => {
			let newValues: string[];
			if (type === 'single') {
				newValues = [toggleValue];
			} else {
				newValues = selectedValues.includes(toggleValue)
					? selectedValues.filter((v) => v !== toggleValue)
					: [...selectedValues, toggleValue];
			}
			setSelectedValues(newValues);
			onValueChange?.(type === 'single' ? newValues[0] : newValues);
		};

		return (
			<div ref={ref} className={cn('flex items-center gap-1', className)} {...props}>
				{React.Children.map(children, (child) => {
					if (React.isValidElement<ToggleProps>(child)) {
						return React.cloneElement(child, {
							pressed: selectedValues.includes(child.props.value as string),
							onPressedChange: () => handleToggle(child.props.value as string)
						});
					}
					return child;
				})}
			</div>
		);
	}
);

ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup };
