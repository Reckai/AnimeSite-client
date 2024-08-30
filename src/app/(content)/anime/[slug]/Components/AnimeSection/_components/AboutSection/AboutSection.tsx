import React, { Suspense } from 'react';
import { AboutAnimeHeader, AboutAnimeHeaderProps } from './Header/AboutAnimeHeader';
import Button from './GenreButton/Button';
import InfoButton from './AnimeInListInfograph/InfoButton/InfoButton';
import AnimeListInfograph, {
	AnimeListInfographProps
} from './AnimeInListInfograph/AnimeListInfograph';
import { Anime } from '@/gql/graphql';
import { useSuspenseQuery } from '@tanstack/react-query';
import CommentList from '@/app/shared/CommentSection/CommentList/CommentList';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { GET_ANIME, GET_COMMENTS } from '../../../../Query';
import { useCommentsByParentId } from '@/app/shared/CommentSection/helpers/useCommentsByParrentId';
import { Comment } from '@/gql/graphql';
export type AboutAnimeSectionProps = AboutAnimeHeaderProps &
	AnimeListInfographProps & {
		description: Anime['description'];
		genres: Anime['genres'];
		slug: string;
		id: string;
	};

function AboutSection({
	id,
	slug,
	title,
	RuTitle,
	description,
	genres,
	animeListInfo
}: AboutAnimeSectionProps) {
	const { client } = useGraphQLClient();
	const { data } = useSuspenseQuery({
		queryKey: [`anime-comments`, id],
		queryFn: async () => client?.request(GET_COMMENTS, { slug })
	});
	const comments = data.anime.comments as Comment[];
	const getCommentsByParentId = useCommentsByParentId(comments);
	const rootComments = getCommentsByParentId(null);
	console.log(data);
	return (
		<div className="mt-8">
			<AboutAnimeHeader title={title} RuTitle={RuTitle} />
			<div className="mb-4 mt-4 flex flex-wrap gap-1">
				{genres?.map((genre) => (
					<Button key={genre.id} text={genre.russian} href={`/genre/${genre.name}`} />
				))}
			</div>
			<article className="mb-3 break-words py-3 leading-snug text-color-text">
				{description}
			</article>
			<article>
				{animeListInfo?.length ? <AnimeListInfograph animeListInfo={animeListInfo} /> : null}
			</article>
			<section>
				<Suspense fallback={<div>Loading...</div>}>
					{Boolean(rootComments.length) ? (
						<div>
							<h2>Comments</h2>
							<div>
								<CommentList
									comments={rootComments}
									getCommentsByParentId={getCommentsByParentId}
								/>
							</div>
						</div>
					) : null}
				</Suspense>
			</section>
		</div>
	);
}

export default AboutSection;
