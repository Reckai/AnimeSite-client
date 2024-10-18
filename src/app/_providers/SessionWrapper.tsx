import React from 'react';
import { graphql } from '@/gql';
import {
	SessionProvider,
	SessionProviderProps
} from '@/app/context/SessionContext/SessionProvider';
import { cookies } from 'next/headers';
import { getClientWithAuthorization } from '@/lib/gqlClient';

export const profileQuery = graphql(`
	query Me {
		me {
			id
			email
			name
			avatar
			role
			createdAt
		}
	}
`);

async function SessionWrapper({ children }: React.PropsWithChildren) {
	const accessToken = cookies().get('qid')?.value || '';

	const session: Omit<SessionProviderProps, 'children'> = {
		defaultSession: undefined
	};

	if (accessToken) {
		const profileQueryResult = await getClientWithAuthorization()
			.request(profileQuery)
			.catch((e) => {
				console.error(e);
				return undefined;
			});

		const sessionResult = profileQueryResult?.me;

		if (sessionResult) {
			session.defaultSession = {
				id: sessionResult.id as string,
				name: sessionResult.name as string,
				createAt: sessionResult.createdAt as string,
				email: sessionResult.email as string,
				image: sessionResult.avatar as string
			};
		}
	}

	return <SessionProvider {...session}>{children}</SessionProvider>;
}
export default SessionWrapper;
