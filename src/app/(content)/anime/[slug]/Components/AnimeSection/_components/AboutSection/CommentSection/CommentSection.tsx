import { GET_COMMENTS } from '@/app/(content)/anime/[slug]/Query';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useCommentsByParentId } from '@/app/shared/CommentSection/helpers/useCommentsByParrentId';
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { Comment } from '@/gql/graphql';
import CommentList from '@/app/shared/CommentSection/CommentList/CommentList';

const CommentSection = ({ slug, id }: { slug: string; id: string }) => {
	const { client } = useGraphQLClient();
	const { data } = useSuspenseQuery({
		queryKey: [`anime-comments`, id],
		queryFn: async () => client?.request(GET_COMMENTS, { slug })
	});
	const comments = data.anime.comments as Comment[];
	const getCommentsByParentId = useCommentsByParentId(comments);
	const rootComments = getCommentsByParentId(null);

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				{Boolean(rootComments.length) ? (
					<div>
						<h2>Comments</h2>
						<div>
							<CommentList comments={rootComments} getCommentsByParentId={getCommentsByParentId} />
						</div>
					</div>
				) : null}
			</Suspense>
		</>
	);
};

export default CommentSection;
