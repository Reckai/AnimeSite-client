'use client';
import { GET_COMMENTS } from '@/app/(content)/anime/[slug]/Query';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useCommentsByParentId } from '@/app/shared/CommentSection/helpers/useCommentsByParrentId';
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { Comment, SortDirection, SortField } from '@/gql/graphql';
import CommentList from '@/app/shared/CommentSection/CommentList/CommentList';

const CommentSection = ({ slug }: { slug: string }) => {
	const { client } = useGraphQLClient();
	const { data, error } = useSuspenseQuery({
		queryKey: [`anime-comments`, slug],
		queryFn: async () => {
			try {
				return await client.request(GET_COMMENTS, {
					slug,
					orderBy: { field: SortField.CreatedAt, direction: SortDirection.Desc }
				});
			} catch (err) {
				console.error('Error fetching comments:', err);
				throw err;
			}
		}
	});

	if (error) {
		console.error('Error in useSuspenseQuery:', error);
		throw error; // This will trigger the nearest error boundary
	}
	const comments = data.getCommentsByAnimeId as Comment[];
	const getCommentsByParentId = useCommentsByParentId(comments || []);
	const rootComments = getCommentsByParentId(null);

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				{rootComments.length ? (
					<div>
						<h2>Comments</h2>
						<div className="mt-6 w-full md:w-1/2">
							<CommentList comments={rootComments} getCommentsByParentId={getCommentsByParentId} />
						</div>
					</div>
				) : null}
			</Suspense>
		</>
	);
};

export default CommentSection;
