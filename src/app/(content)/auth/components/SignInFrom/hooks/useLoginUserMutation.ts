'use client'
import { graphql } from "@/gql";
import { UserLoginInput } from "@/gql/graphql";
import { getClientWithoutAuthorization } from "@/lib/gqlClientWithoutAuthorization";
import { useMutation } from "@tanstack/react-query";

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


export const useLoginUserMutation = () =>{
 return useMutation({
    mutationFn: (data: UserLoginInput) => {

      return getClientWithoutAuthorization().request(loginUserMutation, {
        args: data,
      });
    },
  });
} 