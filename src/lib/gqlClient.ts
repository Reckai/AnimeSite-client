'use server';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { AwesomeGraphQLClient } from 'awesome-graphql-client';
import { cookies } from 'next/headers';
import { print } from 'graphql/language/printer';
import { revalidatePath } from 'next/cache';

export const getClientWithAuthorization = () => {
	const sessionToken = cookies().get('qid')?.value || '';

	return new AwesomeGraphQLClient({
		endpoint: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
		formatQuery: (query: TypedDocumentNode) => print(query),
		fetchOptions: {
			credentials: 'include',
			headers: {
				Cookie: `qid=${sessionToken}`
			}
		}
	});
};
export const revalidate = (path: string) => {
	revalidatePath(path);
};

export const getCookie = () => {
	return cookies().get('access-token')?.value || '';
};
