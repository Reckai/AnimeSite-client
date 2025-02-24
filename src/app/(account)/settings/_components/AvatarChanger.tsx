'use client';
import AvatarHOC from '@/app/shared/AvatarHOC/AvatarHOC';
import { Button } from '@/app/shared/Button/Button';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { profileQuery } from '@/app/api/preFetchProfile/Query';
import MyAvatarCrop from './MyAvatarCrop/MyAvatarCrop';
import { useDeleteAvatarMutation } from './MyAvatarCrop/hooks/useAvatarDelete';

const AvatarChanger = () => {
	const { client } = useGraphQLClient();
	const { data } = useSuspenseQuery({
		queryKey: ['profileData'],
		queryFn: () => client.request(profileQuery)
	});
	const { mutate } = useDeleteAvatarMutation();
	const handleDeleteAvatar = () => {
		mutate({ userId: data?.me.id });

	};
	return (
		<section className="relative mb-6 mr-4 min-w-0 break-words rounded-md bg-[#f6f6f6] p-4 shadow-sm dark:bg-color-el-bg">
			<div className="flex flex-col px-4 sm:flex-row">
				<div className="mx-4 w-full items-center sm:flex">
					<section className="flex h-full flex-col items-center sm:mr-4">
						<AvatarHOC
							imgURL={data?.me.currentAvatar?.url || ''}
							name={data?.me.name || ''}
							className="mx-4 mb-4 h-[128px] w-[128px] flex-none rounded-full"
						/>
						<Button onClick={handleDeleteAvatar} className="button-error" variant={'destructive'}>
							<FaTrash />
							Удалить аватар
						</Button>
					</section>
					<section className="mt-4 sm:mt-0">
						<MyAvatarCrop />
					</section>
				</div>
			</div>
		</section>
	);
};

export default AvatarChanger;
