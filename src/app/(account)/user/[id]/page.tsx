import React from 'react';
import Avatar from './_components/userAvatar/Avatar';
import UserInfo from './_components/userInfo/UserInfo';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { PrefetchProfileData } from '@/api/preFetchProfile/prefetchProfieData';
import AvatarComponent from './_components/userAvatar/AvatarComponent';

async function Page() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['profileData'],
		queryFn: PrefetchProfileData
	});

	return (
		<section className="lg:pt-76 relative z-10 mx-auto max-w-[1532px] px-5 pt-56 sm:pt-60 md:pt-80">
			<div className="flex gap-8">
				<HydrationBoundary state={dehydrate(queryClient)}>
					<section className="mt-[-75px] h-32 w-32">
						<div className="relative h-full w-full overflow-hidden rounded-full">
							<AvatarComponent />
						</div>
					</section>
					<UserInfo />
				</HydrationBoundary>
			</div>
		</section>
	);
}

export default Page;
