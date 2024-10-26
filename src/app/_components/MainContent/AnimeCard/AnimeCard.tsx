import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Genre, Maybe, Poster } from '@/gql/graphql';
type AnimeCard = {
	id: string;
	title: string;
	description: Maybe<Genre[]> | undefined;
	poster: Poster | null;
	slug: string;
};
const AnimeCard = ({ title, poster, slug, description }: AnimeCard) => {
	return (
		<article className="m-b-2 mx-2 mb-4 flex w-[calc(25%-16px)] flex-col sm:w-[calc(25%-16px)] md:mb-6 md:ml-3 md:max-w-[calc(19%-16px)] lg:max-w-[calc(16.6%-20px)]">
			<Link className="flex h-full flex-col" href={`/anime/${slug}`}>
				<div className="relative aspect-18/25 w-full rounded-lg bg-default-bg">
					<Image
						loading="lazy"
						fill
						src={poster?.originalUrl || ''}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt={title}
						className="rounded-lg object-cover"
					/>
				</div>
				<h1 className="mt-2 overflow-hidden text-ellipsis text-sm font-normal text-black dark:text-color-text-accent">
					{title}
				</h1>
				<p className="overflow-hidden text-ellipsis text-xs dark:text-color-text">
					{description
						?.slice(0, 2)
						.map((genre: Genre) => genre.russian)
						.join(', ')}
				</p>
			</Link>
		</article>
	);
};
export default AnimeCard;
