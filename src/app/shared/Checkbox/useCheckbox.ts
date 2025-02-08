import { useState } from 'react';
import { CheckboxState } from './Checkbox';

interface UseCheckboxProps {
	initialState?: CheckboxState;
	onChange?: (state: CheckboxState) => void;
}

export function useCheckbox({ initialState = 'empty', onChange }: UseCheckboxProps = {}) {
	const [state, setState] = useState<CheckboxState>(initialState);
		const handleChange = () => {
		// Cycle through states: empty -> include -> exclude -> empty
		const nextState: Record<CheckboxState, CheckboxState> = {
			empty: 'include',
			include: 'exclude',
			exclude: 'empty'
		};
		setState(nextState[state || 'empty']);
		onChange?.(nextState[state || 'empty']);
	};

	return {
		state,
		setState,
		handleChange,
	};
} 