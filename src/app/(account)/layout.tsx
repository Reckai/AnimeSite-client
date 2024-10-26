import React from 'react';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { PrefetchProfileData } from '../api/preFetchProfile/prefetchProfieData';

async function AccountLayout({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div>{children}</div>
		</HydrationBoundary>
	);
}

export default AccountLayout;
