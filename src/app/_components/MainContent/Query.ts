import { graphql } from "@/gql";


export const GET_ALL_ANIMES = graphql(`
 query AllAnimes {
 allAnimes {
    id
    name
    licenseNameRu
    description
    genres {
      id
      name
      russian
    }
    slug
    poster {
      id
      originalUrl
      previewUrl
    }
  }
}`);


export const SIGN_IN = graphql(`
mutation signInMutation($args: UserLoginInput!) {
  loginUser(args: $args) {
    user {
      id
    }
  }
}
`)