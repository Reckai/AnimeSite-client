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
			<div className='before:contents-["s"] mb-4 flex h-fit w-auto items-center justify-center rounded-lg bg-default-bg before:mt-[138%]'>
				{url ? (
					<Image
						placeholder="empty"
						className="rounded-md"
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
