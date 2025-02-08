import { HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { useFetchAnimes } from '../_Components/MainContent/action';
import { Suspense } from 'react';
import Loading from './_components/Loading';
import MainContent from '../_Components/MainContent/MainContent';

export default async function Home() {
	const queryClient = new QueryClient();
	const fetchAnimes = useFetchAnimes();
	await queryClient.prefetchInfiniteQuery({
		queryKey: ['animes'],
		queryFn: async ({ pageParam = 1 }) => {
			try {
				return await fetchAnimes(pageParam);
			} catch (e) {
				throw new Error('sads');
			}
		},
		initialPageParam: 1
	});

	return (
		<HydrationBoundary>
			<Suspense fallback={<Loading />}>
				<MainContent />
			</Suspense>
		</HydrationBoundary>
	);
}
