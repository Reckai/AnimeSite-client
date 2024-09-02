import { graphql } from "@/gql/gql";


export const likeComment = graphql(`
	mutation LikeComment($commentId: String!) {
		likeComment(commentId: $commentId)
	}
`);