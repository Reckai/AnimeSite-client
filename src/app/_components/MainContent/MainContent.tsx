'use client';
import React, { useEffect, useRef } from 'react';
import AnimeCard from '@/app/_Components/MainContent/AnimeCard/AnimeCard';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useFetchAnimes } from './action';

function MainContent() {
	const observerTarget = useRef<HTMLDivElement>(null);
	const fetchAnimes = useFetchAnimes();
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } =
		useSuspenseInfiniteQuery({
			queryKey: ['animes'],
			queryFn: async ({ pageParam }) => {
				try {
					return await fetchAnimes(pageParam);
				} catch (e) {
					throw e;
				}
			},
			initialPageParam: 1,

			getNextPageParam: (lastPage, allPages) => {
				return lastPage?.hasNextPage ? allPages.length + 1 : null;
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
		<>
			<section className="flex w-full flex-wrap">
				{data &&
					data?.pages.map((page, i) => (
						<React.Fragment key={i}>
							{page?.items.map((anime) => (
								<AnimeCard
									id={anime.id}
									slug={anime.slug}
									description={anime.genres}
									poster={anime.poster?.[0] || null}
									title={anime.licenseNameRu || ''}
									key={anime.id}
								/>
							))}
						</React.Fragment>
					))}
			</section>

			{isFetchingNextPage && <div className="h-6 w-6 animate-pulse rounded-full bg-white"></div>}
			<div ref={observerTarget} style={{ height: '20px' }} />
		</>
	);
}

export default MainContent;
