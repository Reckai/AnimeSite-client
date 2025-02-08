import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';

import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query';
import { graphql } from '@/gql';

import GenreDrawer from './_components/GenreDrawer/GenreDrawer';
import MainContent from '@/app/_Components/MainContent/MainContent';
import { Suspense } from 'react';
import Loading from '@/app/shared/Loading/Loading';
import FiltersClient from './Filters';
import { FilterProvider } from './context/Filter/FilterProvider';
import Search from './_components/Search/Search';
import { Button } from '@/app/shared/Button/Button';
import ResetButton from './_components/ResetButton/ResetButton';
import StudiosDrawer from './_components/StudioDrawer/StudioDrawer';

export type Genre = {
	name: string;
	id: string;
};

export const getFilters = graphql(`
	query FetchedFilters {
		fetchReleasesFilters {
			genres {
				genres {
					id
					russian
				}
				count
			}
			studios {
				count
				studios {
					id
					name
				}
			}
		}
	}
`);

export const getReleases = graphql(`
	query AnimeWithFilters($filter: AnimeFilterParams!) {
		animesWithFilter(filter: $filter) {
			animes {
				id
				licenseNameRu
				slug
				poster {
					id
					originalUrl
					previewUrl
				}
				genres {
					id
					russian
				}
			}
			count
			hasNextPage
		}
	}
`);
export default async function CatalogPage() {
	const client = getClientWithoutAuthorization();
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['animesWithFilters'],
		queryFn: async ({ pageParam = null }) => {
			try {
				return await client?.request(getReleases, {
					filter: {
						take: 20,
						cursor: pageParam,
						orderBy: { licenseNameRu: 'desc' }
					}
				});
			} catch (e) {
				throw new Error('sads');
			}
		},
		initialPageParam: null
	});
	await Promise.all([
		await queryClient.prefetchQuery({
			queryKey: ['filters'],
			queryFn: async () => {
				return await client?.request(getFilters);
			}
		}),
		await queryClient.prefetchQuery
	]);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<FilterProvider>
				<div className="mb-2">
					<Search />
				</div>
				<div className="flex items-start">
					<div className="w-3/4">
						<Suspense
							fallback={<div className="h-6 w-6 animate-pulse rounded-full bg-white"></div>}
						>
							<FiltersClient />
						</Suspense>
					</div>
					<div className="h-70 ml-70 sticky top-[calc(3.5rem)] w-72 overflow-hidden rounded-md border-2 p-4 dark:border-none dark:bg-color-el-bg dark:shadow-md">
						<ResetButton />
						<GenreDrawer />
						<StudiosDrawer />
					</div>
				</div>
			</FilterProvider>
		</HydrationBoundary>
	);
}
