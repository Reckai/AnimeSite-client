import { graphql } from "@/gql/gql";

export const SignUpMutation = graphql(`
    mutation SignupUser($password: String!, $email: String!) {
      signupUser(password: $password, email: $email)
    }
  `);
  