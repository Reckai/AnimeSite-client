import { CheckboxState } from '@/app/shared/Checkbox/Checkbox';
import React from 'react';

export interface FilterState {
	[key: string]: {
		include: string[];
		exclude: string[];
	};
}

export interface FilterContextProps {
	search: string;
	filters: FilterState;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	handleChange: (filterKey: string, state: { include: string[]; exclude: string[] }) => void;
	resetFilter: (filterKey: string) => void;
	clearFilters: () => void;
	getFilterState: (itemId: string, filterKey: string) => CheckboxState;
}

export const FilterContext = React.createContext<FilterContextProps>({
	search: '',
	filters: { studios: { include: [], exclude: [] }, genres: { include: [], exclude: [] } },
	setSearch: () => {},
	handleChange: () => {},
	clearFilters: () => {},
	resetFilter: () => {},
	getFilterState: () => 'empty'
});
