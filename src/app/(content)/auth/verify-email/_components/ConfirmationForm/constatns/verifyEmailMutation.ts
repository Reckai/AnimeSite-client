import { graphql } from "@/gql/gql";

export const VERIFY_EMAIL_MUTATION = graphql(`
    mutation VerifyEmailByToken($token: String!) {
      VerifyEmailByToken(token: $token) {
        message
        success
      }
    }
  `);