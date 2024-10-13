import { graphql } from '@/gql';

export const DELETE_COMMENTS = graphql(`
	mutation deleteComment($commentId: String!) {
		deleteComment(commentId: $commentId) {
			id
			message
			createdAt
			parentId
			userCanDelete
			userCanUpdate
			animeId
		}
	}
`);
