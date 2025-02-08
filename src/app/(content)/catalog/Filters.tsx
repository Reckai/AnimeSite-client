'use client';

import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';
import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getFilters, getReleases } from './page';
import { AnimeWithFiltersQuery } from '@/gql/graphql';
import AnimeCard from '@/app/_Components/MainContent/AnimeCard/AnimeCard';
import React, { useEffect, useRef } from 'react';
import { useFilters } from './context/Filter/useFilter';

function FiltersClient() {
	const client = getClientWithoutAuthorization();
	const observerTarget = useRef<HTMLDivElement>(null);
	const { search, filters } = useFilters();

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
		useSuspenseInfiniteQuery({
			queryKey: ['animesWithFilters', search, filters],
			queryFn: async ({ pageParam }) => {
				return await client?.request(getReleases, {
					filter: {
						take: 20,
						cursor: pageParam,
						orderBy: { licenseNameRu: 'desc' },
						ruName: search || undefined,
						filters
					}
				});
			},
			initialPageParam: undefined as string | undefined,
			getNextPageParam: (lastPage) => {
				if (!lastPage?.animesWithFilter.hasNextPage) return undefined;
				const animes = lastPage?.animesWithFilter.animes;
				const lastAnime = animes?.[animes.length - 1];
				return lastAnime?.id;
			},
			staleTime: 60000, // 1 minute
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 1 }
		);
		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}
		return () => observer.disconnect();
	});

	return (
		<div>
			<section className="flex w-full flex-wrap">
				{data &&
					data?.pages.map((page, i) => (
						<React.Fragment key={i}>
							{page?.animesWithFilter.animes?.map((anime: any) => {
								return (
									<AnimeCard
										id={anime.id}
										slug={anime.slug}
										description={anime.genres}
										poster={anime.poster?.[0] || null}
										title={anime.licenseNameRu || ''}
										key={anime.id}
									/>
								);
							})}
						</React.Fragment>
					))}
			</section>
			{isFetchingNextPage && <div className="h-6 w-6 animate-pulse rounded-full bg-white"></div>}
			<div ref={observerTarget} style={{ height: '20px' }} />
		</div>
	);
}
export default FiltersClient;
