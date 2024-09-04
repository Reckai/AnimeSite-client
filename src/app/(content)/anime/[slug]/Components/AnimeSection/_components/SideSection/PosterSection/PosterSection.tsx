'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSession } from '@/app/context/SessionContext/useSession';
import AnimeWatchButtonHOC from './AnimeWatchButtonHOC/AnimeWatchButtonHOC';

export type PosterSectionProps = {
	url: string | undefined;
	name: string | undefined | null;
	id: string;
	slug: string;
};
export function PosterSection({ url, name, id, slug }: PosterSectionProps) {
	const { session } = useSession();
	return (
		<article className="mb-4">
			<div className='before:contents-["s"] sm:w-50 mb-4 flex h-fit w-auto items-center justify-center rounded-lg transition-all before:mt-[138%] md:w-64'>
				{url ? (
					<Image
						placeholder="empty"
						className="rounded-md bg-default-bg"
						alt={name ? 'ds' : 'sad'}
						src={url}
						width={500}
						height={500}
					/>
				) : (
					'D'
				)}
			</div>
			<div className="flex">{session && <AnimeWatchButtonHOC id={id} slug={slug} />}</div>
		</article>
	);
}
