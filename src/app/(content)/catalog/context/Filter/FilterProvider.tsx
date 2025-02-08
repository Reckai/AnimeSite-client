'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FilterContext, FilterState } from './FilterContext';
import { useQueryClient } from '@tanstack/react-query';
import { CheckboxState } from '@/app/shared/Checkbox/Checkbox';
import { useFilterUrl } from '../../hooks/useFilterUrl';

export interface FilterProviderProps {
	children: React.ReactNode;
	defaultSearch?: string;
	defaultFilters?: FilterState;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({
	children,
	defaultSearch = '',
	defaultFilters = { studios: { include: [], exclude: [] }, genres: { include: [], exclude: [] } }
}) => {
	const [search, setSearch] = useState<string>(defaultSearch);
	const [filters, setFilters] = useState<FilterState>(defaultFilters);
	const queryClient = useQueryClient();

	const { updateUrl } = useFilterUrl({
		filter: {
			take: 18,
			filters,
			ruName: search || undefined,
			orderBy: { asc: 'asc' }
		}
	});

	useEffect(() => {
		const hasActiveFilters = Object.values(filters).some(
			(filter) => filter.include.length > 0 || filter.exclude.length > 0
		);

		if (!hasActiveFilters && !search) {
			window.history.replaceState({}, '', window.location.pathname);
		} else {
			updateUrl({
				filter: {
					take: 18,
					filters,
					ruName: search || undefined,
					orderBy: { asc: 'asc' }
				}
			});
		}
		queryClient.invalidateQueries({ queryKey: ['animesWithFilters'] });
	}, [search, queryClient, filters, updateUrl]);

	const handleChange = (filterKey: string, state: { include: string[]; exclude: string[] }) => {
		setFilters((prev) => ({
			...prev,
			[filterKey]: state
		}));
	};

	const getFilterState = (itemId: string, filterKey: string): CheckboxState => {
		const currentState = filters[filterKey] || { include: [], exclude: [] };
		if (currentState.include.includes(itemId)) return 'include';
		if (currentState.exclude.includes(itemId)) return 'exclude';
		return 'empty';
	};
	const clearFilters = () => {
		setFilters({});
		setSearch('');
	};

	const resetFilter = useCallback((filterKey: string) => {
		setFilters((prev) => ({
			...prev,
			[filterKey]: { include: [], exclude: [] }
		}));
	}, []);
	const value = useMemo(
		() => ({
			search,
			filters,
			setSearch,
			handleChange,
			clearFilters,
			resetFilter,
			getFilterState
		}),
		[search, filters]
	);

	return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};
