import { graphql } from "@/gql";


export const GET_ALL_ANIMES = graphql(`
 query Items($limit: Float!, $page: Float!) {
  allAnimes(limit: $limit, page: $page) {
    items {
      id
      name
      licenseNameRu
      slug
      poster {
        id
        originalUrl
        previewUrl
      }
      genres {
        id
        russian
        name
      }
    }
    totalCount
    hasNextPage
  }
}
`);


export const SIGN_IN = graphql(`
mutation signInMutation($args: UserLoginInput!) {
  loginUser(args: $args) {
    user {
      id
    }
  }
}
`)