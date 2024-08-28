'use client';

import React from 'react';
import { useGetAnime } from './hooks/useGetAnime';
import { PosterSection } from './_components/SideSection/PosterSection/PosterSection';
import AboutSection from './_components/AboutSection/AboutSection';

const AnimeSection = ({ slug }: { slug: string }) => {
	const { AboutSectionProps, posterProps } = useGetAnime(slug);

	return (
		<section className="relative z-10">
			<div className="mx-16 flex">
				<aside className="mr-10 w-64 flex-none">
					<PosterSection {...posterProps} slug={slug} />
				</aside>
				<AboutSection {...AboutSectionProps} />
			</div>
		</section>
	);
};

export default AnimeSection;
