'use client';
import { PrefetchProfileData } from '@/api/preFetchProfile/prefetchProfieData';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Avatar from './Avatar';

import AvatarPlug from '@/app/shared/AvatarPlug/AvatarPlug';

const AvatarComponent = () => {
	const { data } = useQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});
	return (
		<div className="h-full w-full">
			{Boolean(data?.image) ? (
				<Avatar
					className="h-full w-full"
					alt="avatar"
					width="400"
					height="400"
					src={data?.image as string}
				/>
			) : (
				<AvatarPlug className="text-4xl" name={data?.name as string} />
			)}
		</div>
	);
};

export default AvatarComponent;
