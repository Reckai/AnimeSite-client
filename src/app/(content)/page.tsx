import React, { Suspense } from 'react';
import MainContent from '@/app/_Components/MainContent/MainContent';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchAnimes } from '../_Components/MainContent/action';

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchInfiniteQuery({
		queryKey: ['animes'],
		queryFn: fetchAnimes,
		initialPageParam: 1
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<MainContent />
		</HydrationBoundary>
	);
}
