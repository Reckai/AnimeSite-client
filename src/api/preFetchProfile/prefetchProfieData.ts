import { getClientWithAuthorization } from '@/lib/gqlClient';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { profileQuery } from './Query';

export const fetchProfileData = async ({
	query
}: {
	query: TypedDocumentNode<Record<string, any>, any>;
}) => {
	const res = await getClientWithAuthorization().request(query);
	return res;
};

export const PrefetchProfileData = async () => {
	const res = await getClientWithAuthorization().request(profileQuery);
	return res.me;
};
