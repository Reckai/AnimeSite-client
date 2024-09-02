'use client';
import React, { useEffect, useRef } from 'react';
import AnimeCard from '@/app/_Components/MainContent/AnimeCard/AnimeCard';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchAnimes } from './action';

function MainContent() {
	const observerTarget = useRef<HTMLDivElement>(null);

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
		queryKey: ['animes'],
		queryFn: ({ pageParam }) => fetchAnimes({ pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.hasNextPage ? allPages.length + 1 : null;
		},
		staleTime: 60000, // 1 minute
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	console.log('component rendered');
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
				{data?.pages.map((page, i) => (
					<React.Fragment key={i}>
						{page.items.map((anime) => (
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
