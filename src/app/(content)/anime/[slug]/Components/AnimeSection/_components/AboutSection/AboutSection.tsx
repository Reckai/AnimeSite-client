import React, { Suspense } from 'react';
import { AboutAnimeHeader, AboutAnimeHeaderProps } from './Header/AboutAnimeHeader';
import Button from './GenreButton/Button';

import AnimeListInfograph, {
	AnimeListInfographProps
} from './AnimeInListInfograph/AnimeListInfograph';
import { Anime } from '@/gql/graphql';
import CommentList from '@/app/shared/CommentSection/CommentList/CommentList';
import CommentSection from './CommentSection/CommentSection';

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
				<CommentSection slug={slug} id={id} />
			</section>
		</div>
	);
}

export default AboutSection;
