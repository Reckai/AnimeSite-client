import { graphql } from "@/gql/gql";

export const CREATE_COMMENT = graphql(`mutation CreateComment($animeId: String!, $message: String!) {
    createComment(animeId: $animeId, message: $message) {
      id
                  message
                  createdAt
                  parentId
                  viewerCanDelete
                  viewerCanUpdate
                  animeId
    }
  }`);