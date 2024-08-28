import React from 'react';
import Image from 'next/image';
import LoadingGif from './assets/luffy.gif';
const Loading = () => {
	return (
		<div className="relative mx-auto my-auto text-center">
			<Image width={180} height={180} alt="loading" src={LoadingGif} />
			<h1 className="text-2xl text-white">Loading . . . </h1>
		</div>
	);
};

export default Loading;
