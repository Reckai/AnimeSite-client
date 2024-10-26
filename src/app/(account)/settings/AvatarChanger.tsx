'use client';
import AvatarHOC from '@/app/shared/AvatarHOC/AvatarHOC';
import { Button } from '@/app/shared/Button/Button';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { profileQuery } from '@/app/api/preFetchProfile/Query';
import MyAvatarCrop from './_components/MyAvatarCrop/MyAvatarCrop';
const AvatarChanger = () => {
	const { client } = useGraphQLClient();
	const { data } = useSuspenseQuery({
		queryKey: ['profileData'],
		queryFn: () => client.request(profileQuery)
	});

	return (
		<section className="relative mb-6 mr-4 min-w-0 break-words rounded-md bg-[#dfdfdf8c] p-4 shadow-sm">
			<div className="flex px-4">
				<div className="mx-4 w-full items-center sm:flex">
					<section className="sm:flex:none flex h-full flex-col items-center sm:mr-4">
						<AvatarHOC
							imgURL={data?.me.avatar || ''}
							name={data?.me.name || ''}
							className="flex:none mb-2 h-32 w-32 rounded-full"
						/>
						<Button variant={'destructive'}>
							<FaTrash />
							Удалить аватар
						</Button>
					</section>
					<section className="md:sm-0 mt-4">
						<MyAvatarCrop />
						{/* <AvatarCrop /> */}
					</section>
				</div>
			</div>
		</section>
	);
};

export default AvatarChanger;
