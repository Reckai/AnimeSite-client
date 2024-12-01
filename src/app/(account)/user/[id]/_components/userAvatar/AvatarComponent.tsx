// 'use client';
// import { PrefetchProfileData } from '@/app/api/preFetchProfile/prefetchProfieData';
// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import Avatar from '../../../../../shared/Avatar/Avatar';

// import AvatarPlug from '@/app/shared/AvatarPlug/AvatarPlug';

// const AvatarComponent = () => {
// 	const { data } = useQuery({
// 		queryKey: ['profileData'],
// 		queryFn: PrefetchProfileData
// 	});
// 	// const image = data?.me;
// 	const name = data?.me.name;
// 	return (
// 		<div className="h-full w-full">
// 			{image ? (
// 				<Avatar
// 					className="h-full w-full"
// 					alt="avatar"
// 					width="400"
// 					height="400"
// 					src={image as string}
// 				/>
// 			) : (
// 				<AvatarPlug className="text-4xl" name={name as string} />
// 			)}
// 		</div>
// 	);
// };

// export default AvatarComponent;
