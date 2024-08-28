import { Anime } from '@/__generated__/graphql';
import React from 'react';

export type AboutAnimeHeaderProps = {
	title: Anime['name'];
	RuTitle: Anime['licenseNameRu'];
};

export const AboutAnimeHeader = ({ title, RuTitle }: AboutAnimeHeaderProps) => {
	return (
		<div>
			<header>
				<h1 className="text-3xl font-bold">{RuTitle}</h1>
				<p className="text-xl text-color-text">{title ? title : 'Default Original Title'}</p>
			</header>
		</div>
	);
};
