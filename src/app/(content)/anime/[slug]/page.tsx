import AnimeSection from './Components/AnimeSection/AnimeSection';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getClientWithAuthorization } from '@/lib/gqlClient';
import { GET_ANIME, GET_COMMENTS } from './Query';
import { SortDirection, SortField } from '@/gql/graphql';

// export async function generateStaticParams() {

// }

export default async function Page({ params }: { params: { slug: string } }) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: [`anime-${params.slug}`],
		queryFn: () =>
			getClientWithAuthorization().request(GET_ANIME, {
				slug: params.slug
			})
	});
	await queryClient.prefetchQuery({
		queryKey: [`anime-comments`, params.slug],
		queryFn: async () => {
			try {
				return await getClientWithAuthorization().request(GET_COMMENTS, {
					slug: params.slug,
					orderBy: { field: SortField.CreatedAt, direction: SortDirection.Desc }
				});
			} catch (err) {
				console.error('Error fetching comments:', err);
				throw err;
			}
		}
	});
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<AnimeSection slug={params.slug} />
		</HydrationBoundary>
	);
}
