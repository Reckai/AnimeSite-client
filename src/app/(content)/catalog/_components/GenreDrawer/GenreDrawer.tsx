'use client';
import React from 'react';
import { Button } from '@/app/shared/Button/Button';
import Drawer from '../Drawer/Drawer';
import { getFilters } from '../../page';
import { useQuery } from '@tanstack/react-query';
import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';
import FetchedFilters from '../fetchedFilter/FetchedFilters';
import { FilterItem } from '../FilterGroup/FilterGroup';

import { useFilters } from '../../context/Filter/useFilter';

const GenreDrawer = () => {
	const client = getClientWithoutAuthorization();
	const {
		handleChange: setFilters,
		resetFilter,
		filters: genreFiltersState,
		getFilterState
	} = useFilters();

	const { data: filters } = useQuery({
		queryKey: ['filters'],
		queryFn: async () => {
			return await client?.request(getFilters);
		}
	});
	const change = (filterKey: string, state: { include: string[]; exclude: string[] }) => {
		setFilters(filterKey, state);
	};
	const normiziedFilters: FilterItem[] =
		filters?.fetchReleasesFilters.genres
			.map((genre) => ({
				id: genre.genres[0]?.id || '',
				name: genre.genres[0]?.russian || '',
				count: genre.count || 0
			}))
			.filter((item): item is FilterItem => Boolean(item.id && item.name)) || [];

	return (
		<div>
			<Drawer.Root>
				<Drawer.Trigger>
					<div>
						<div className="flex items-center justify-between gap-2 text-secondary dark:text-color-text-accent">
							<div>Жанры</div>
							<div className="text-2xl">{'>'}</div>
						</div>
						<div>
							<Button
								variant="thirdly"
								className="w-full bg-transparent text-secondary dark:text-color-text-accent dark:hover:bg-opacity-secondary"
							>
								Все
							</Button>
						</div>
					</div>
				</Drawer.Trigger>
				<Drawer.Content>
					<div className="flex h-full flex-col">
						<div className="flex justify-between">
							<div className="w-1/2">
								<Drawer.Close />
							</div>
							<Drawer.FilterReset
								onClick={() => {
									resetFilter('genres');
								}}
							/>
						</div>
						<div className="mt-4 h-[calc(100vh-6rem)] overflow-y-auto">
							<FetchedFilters
								filterKey="genres"
								items={normiziedFilters}
								filterState={genreFiltersState['genres']}
								handleChange={change}
								getFilterState={getFilterState}
							/>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Root>
		</div>
	);
};

export default GenreDrawer;
