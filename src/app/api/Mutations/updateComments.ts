import { graphql } from "@/gql";

export const UPDATE_COMMENT = graphql(`
    mutation UpdateComment($message: String!, $commentId: String!) {
  updateComment(message: $message, commentId: $commentId) {
  id
                  message
                  createdAt
                  parentId
                  userCanDelete
    userCanUpdate       
                  animeId  
    }}`)