import { graphql } from "@/gql";
export const loginWiaGoogleMutation = graphql(`mutation LoginWiaGoogle($token: String!) {
    loginWiaGoogle(token: $token) {
      id
      email
      name
      createdAt
      image
    }
  }`)