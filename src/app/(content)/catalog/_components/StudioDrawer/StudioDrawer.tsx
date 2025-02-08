'use client';

import { Button } from '@/app/shared/Button/Button';
import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';
import { useQuery } from '@tanstack/react-query';
import { getFilters } from '../../page';
import { useFilters } from '../../context/Filter/useFilter';
import { FilterItem } from '../FilterGroup/FilterGroup';
import Drawer from '../Drawer/Drawer';
import FetchedFilters from '../fetchedFilter/FetchedFilters';

const StudiosDrawer = () => {
	const client = getClientWithoutAuthorization();

	const {
		handleChange: setFilters,
		resetFilter,
		getFilterState,
		filters: filtersState
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
		filters?.fetchReleasesFilters.studios
			.map((studio) => ({
				id: studio.studios[0]?.id || '',
				name: studio.studios[0]?.name || '',
				count: studio.count || 0
			}))
			.filter((item): item is FilterItem => Boolean(item.id && item.name)) || [];

	return (
		<div>
			<Drawer.Root>
				<Drawer.Trigger>
					<div>
						<div className="flex items-center justify-between gap-2 text-black dark:text-color-text-accent">
							<div>Студия</div>
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
									resetFilter('studios');
								}}
							/>
						</div>
						<div className="mt-4 h-[calc(100vh-6rem)] overflow-y-auto">
							<FetchedFilters
								filterKey="studios"
								items={normiziedFilters}
								filterState={filtersState['studios']}
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

export default StudiosDrawer;
