import { graphql } from '@/gql/gql';

export const CREATE_COMMENT = graphql(`
	mutation CreateComment($animeId: String!, $message: String!, $parentId: String) {
		createComment(animeId: $animeId, message: $message, parentId: $parentId) {
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
