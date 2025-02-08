import { CheckboxState } from '@/app/shared/Checkbox/Checkbox';

import { CheckboxWithLabel } from '@/app/shared/CheckboxWithLabel/CheckBoxWithLabel';
import { FilterState } from '../../context/Filter/FilterContext';

export interface FilterItem {
	name: string;
	id: string;
	count: number;
}

interface FilterGroupProps<T extends FilterItem> {
	items: T[];
	filterKey: string;
	onFilterChange: (filterKey: string, state: { include: string[]; exclude: string[] }) => void;
	currentFilterState: FilterState[string];
	getItemState: (itemId: string, filterKey: string) => CheckboxState;
}

export function FilterGroup<T extends FilterItem>({
	items,
	filterKey,
	onFilterChange,
	currentFilterState,
	getItemState
}: FilterGroupProps<T>) {
	return (
		<div className="flex flex-col gap-2">
			{items.map((item) => (
				<CheckboxWithLabel
					className="w-full"
					key={item.id}
					label={item.name + ' ' + '(' + item.count + ')'}
					initialState={getItemState(item.id, filterKey)}
					onChange={(state) => {
						const newState = {
							include:
								state === 'include'
									? [...currentFilterState.include, item.id]
									: currentFilterState.include.filter((id) => id !== item.id),
							exclude:
								state === 'exclude'
									? [...currentFilterState.exclude, item.id]
									: currentFilterState.exclude.filter((id) => id !== item.id)
						};
						onFilterChange(filterKey, newState);
					}}
				/>
			))}
		</div>
	);
}
