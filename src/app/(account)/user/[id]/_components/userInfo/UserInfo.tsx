'use client';
import { PrefetchProfileData } from '@/api/preFetchProfile/prefetchProfieData';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UserInfo = () => {
	const { data } = useQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});

	return (
		<section className="flex flex-wrap items-start justify-between sm:flex-auto">
			<div className="flex items-center gap-3">
				<h1 className="font text-3xl font-medium leading-tight text-black dark:text-white">
					{data?.name}
				</h1>
			</div>
		</section>
	);
};

export default UserInfo;
