'use client';
import { profileQuery } from '@/app/api/preFetchProfile/Query';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';

const Sds = () => {
	const { client } = useGraphQLClient();
	const { data } = useSuspenseQuery({
		queryKey: ['profileData'],
		queryFn: () => client.request(profileQuery)
	});
	console.log('profileQuery', data);
	return (
		<div>
			asdsad
			<Suspense fallback={<div>asdsa</div>}>{data ? data.me.id : ''}</Suspense>
		</div>
	);
};

export default Sds;
