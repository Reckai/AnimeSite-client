import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { AwesomeGraphQLClient } from 'awesome-graphql-client';
import React, { useContext } from 'react';

interface CommentOptionsContextProps {
	commentId: string;
	parentId?: string | null;
	message: string;
	client: AwesomeGraphQLClient<
		TypedDocumentNode<
			{
				[key: string]: any;
			},
			{
				[key: string]: any;
			}
		>,
		RequestInit,
		Response
	>;
}
export const CommentOptionsContext = React.createContext<CommentOptionsContextProps>(null!);

export const useCommentContext = () => {
	const context = useContext(CommentOptionsContext);
	if (!context) {
		throw new Error('No Comment context provider');
	}
	return context;
};
