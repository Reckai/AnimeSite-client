'use client';
import { PrefetchProfileData } from '@/app/api/preFetchProfile/prefetchProfieData';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import AvatarPlug from '@/app/shared/AvatarPlug/AvatarPlug';
import AvatarHOC from '@/app/shared/AvatarHOC/AvatarHOC';

const AvatarComponent = () => {
	const { data } = useQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});
	const image = data?.me;
	const name = data?.me.name;
	return (
		<div className="h-full w-full">
			{image ? (
				<AvatarHOC
					imgURL={image.currentAvatar?.url as string}
					name={name as string}
					className="h-full w-full"
				/>
			) : (
				<AvatarPlug className="text-4xl" name={name as string} />
			)}
		</div>
	);
};

export default AvatarComponent;
