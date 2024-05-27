
import { graphql } from "@/gql";
import { UserLoginInput } from "@/gql/graphql";

export const loginUserMutation =graphql(`

mutation Mutation($args: UserLoginInput!) {
loginUser(args: $args) {
  user {
    id
      email
      name
      image
      role
      createdAt
  }
}
}`)


const useloginUserMutation = (varables: UserLoginInput) =>{
  
} 