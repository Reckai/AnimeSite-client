'use client';

import { graphql } from '@/gql/gql';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';

import { OneAnimeQuery } from '@/gql/graphql';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { GET_ANIME } from '../../../Query';

function transformAnimeData(animeData: OneAnimeQuery) {
	return {
		id: animeData?.anime.id,
		title: animeData?.anime.name,
		animeListInfo: animeData?.anime.userWatchListStatusDistributions,
		description: animeData?.anime.description,
		genres: animeData?.anime.genres,
		RuTitle: animeData?.anime.licenseNameRu,
		poster: animeData?.anime.poster?.[0]
	};
}

export function useGetAnime(slug: string) {
	const { client } = useGraphQLClient();

	const query = useSuspenseQuery({
		queryKey: [`anime-${slug}`],
		queryFn: async () => {
			return client.request(GET_ANIME, { slug });
		}
	});

	if (query.error) {
		throw query.error;
	}
	const data = transformAnimeData(query.data!);

	return {
		posterProps: {
			name: data.title,
			url: data.poster?.originalUrl,
			id: data.id
		},
		AboutSectionProps: {
			id: data.id,
			title: data.title,
			RuTitle: data.RuTitle,
			animeListInfo: data.animeListInfo,
			genres: data.genres,
			description: data.description
		}
	};
}
