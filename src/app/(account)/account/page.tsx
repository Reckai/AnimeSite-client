'use client';
import { PrefetchProfileData } from '@/app/api/preFetchProfile/prefetchProfieData';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

function Page() {
	const { data } = useSuspenseQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});
	return <div className="h-60 w-60 bg-orange-600">{data.me.id}</div>;
}

export default Page;
