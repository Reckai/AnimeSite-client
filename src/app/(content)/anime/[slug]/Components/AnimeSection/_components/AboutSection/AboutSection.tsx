import React from 'react';
import { AboutAnimeHeader, AboutAnimeHeaderProps } from './Header/AboutAnimeHeader';
import Button from './GenreButton/Button';
import AnimeListInfograph, {
	AnimeListInfographProps
} from './AnimeInListInfograph/AnimeListInfograph';
import { Anime } from '@/gql/graphql';
import CommentSection from './CommentSection/CommentSection';

import { useSession } from '@/app/context/SessionContext/useSession';
import Link from 'next/link';
import CommentForm from '@/app/shared/CommentForm/CommentForm';
import { useCreateComment } from '@/app/api/services/comments/createComment';

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
	const { session } = useSession();
	const createCommentMutation = useCreateComment(slug);
	const onCreateComment = async (message: string) => {
		createCommentMutation.mutate({ message, animeId: id });
	};
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
			<section className="mt-10">
				<div className="mb-10">
					{session?.id ? (
						<CommentForm
							autofocus
							loading={createCommentMutation.isPending}
							error={createCommentMutation.error}
							onSubmitFunction={onCreateComment}
						/>
					) : (
						<span>
							<Link
								className="m-0 h-9 p-0 text-primary underline-offset-4 hover:underline"
								href="/auth"
							>
								Ввойдите
							</Link>{' '}
							что бы оставить комментарий
						</span>
					)}
				</div>
				<CommentSection slug={slug} />
			</section>
		</div>
	);
}

export default AboutSection;
