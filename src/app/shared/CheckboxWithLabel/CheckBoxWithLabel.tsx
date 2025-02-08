'use client';

import * as React from 'react';
import { cn } from '../../utils';
import { Checkbox, CheckboxState } from '../Checkbox/Checkbox';

interface CheckboxWithLabelProps {
	label: string;
	className?: string;
	labelClassName?: string;
	onChange: (state: CheckboxState) => void;
	initialState: CheckboxState;
}

export function CheckboxWithLabel({
	label,
	className,
	labelClassName,
	onChange,
	initialState
}: CheckboxWithLabelProps) {
	const [state, setState] = React.useState<CheckboxState>(initialState);

	React.useEffect(() => {
		setState(initialState);
	}, [initialState]);

	const handleClick = () => {
		const nextState: Record<CheckboxState, CheckboxState> = {
			empty: 'include',
			include: 'exclude',
			exclude: 'empty'
		};
		setState(nextState[state]);
		onChange(nextState[state]);
	};

	return (
		<div
			onClick={handleClick}
			className={cn('group flex cursor-pointer items-center gap-2 text-color-text', className)}
		>
			<Checkbox className="group-hover:border-primary" state={state} />
			<span className={cn('select-none', labelClassName)}>{label}</span>
		</div>
	);
}
