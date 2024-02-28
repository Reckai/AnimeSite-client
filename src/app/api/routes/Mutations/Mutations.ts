import { gql} from '@apollo/client';
export const SIGNUP_USER = gql(`
mutation SignUp($args: UserLoginInput!) {
  signupUser(args: $args) {
    token
    RefreshToken
    user {
      id
    }
  }
}`)
export const LOGIN_USER = gql(`
mutation LoginUser($args: UserLoginInput!) {
  loginUser(args: $args) {
    token
    RefreshToken
    user {
      id
    }
  }
}`)

export const GET_USER_DATA = gql(`
query Me {
  me {
    id
    name
    email
  }
}`)

export const REFRESH_TOKEN = gql(`
mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    token
    RefreshToken
  }
}`)