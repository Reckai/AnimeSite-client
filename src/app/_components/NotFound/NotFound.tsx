import React from 'react';
import Image from 'next/image';
import AnimeNotFound from './assets/evaporate-disappear.gif';
const NotFound = () => {
	return (
		<div className="w-50% h-50% relative mx-auto my-auto flex flex-col items-center justify-center text-center text-white">
			<h1 className="text-2xl">Anime Not Found</h1>
			<Image width={300} height={300} src={AnimeNotFound} alt="Anime Not Found" />
		</div>
	);
};

export default NotFound;
