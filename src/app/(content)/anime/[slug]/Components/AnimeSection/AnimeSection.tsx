'use client';

import React from 'react';
import { useGetAnime } from './hooks/useGetAnime';
import { PosterSection } from './_components/SideSection/PosterSection/PosterSection';
import AboutSection from './_components/AboutSection/AboutSection';

const AnimeSection = ({ slug }: { slug: string }) => {
	const { AboutSectionProps, posterProps } = useGetAnime(slug);

	return (
		<section className="relative z-10 sm:flex">
			<div className="mx-16 md:flex">
				<aside className="mr-10 w-full flex-none md:w-64">
					<PosterSection {...posterProps} slug={slug} />
				</aside>
				<AboutSection {...AboutSectionProps} slug={slug} />
			</div>
		</section>
	);
};

export default AnimeSection;
