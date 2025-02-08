'use client';
import { CheckboxState } from '@/app/shared/Checkbox/Checkbox';
import { FilterGroup, FilterItem } from '../FilterGroup/FilterGroup';
import { FilterState } from '../../context/Filter/FilterContext';

interface FetchedFiltersProps {
	items: FilterItem[];
	filterKey: string;
	filterState: { include: string[]; exclude: string[] };
	handleChange: (filterKey: string, state: { include: string[]; exclude: string[] }) => void;
	getFilterState: (itemId: string, filterKey: string) => CheckboxState;
}
function FetchedFilters({
	items,
	filterKey,
	filterState,
	handleChange,
	getFilterState
}: FetchedFiltersProps) {
	const currentFilterState = filterState || { include: [], exclude: [] };
	return (
		<div>
			<FilterGroup
				items={items}
				filterKey={filterKey}
				currentFilterState={currentFilterState}
				onFilterChange={handleChange}
				getItemState={getFilterState}
			/>
			{JSON.stringify(filterState, null, 2)}
		</div>
	);
}
export default FetchedFilters;
