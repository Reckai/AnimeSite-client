import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient"
import { useMutation } from "@tanstack/react-query";
import { SignUpMutation } from "../constants/signUpMutation";
import { SignupUserMutationVariables } from "@/gql/graphql";

export const useSignUpMutation = () => {
    const {client} = useGraphQLClient();
    return useMutation({
        mutationFn: async (data: SignupUserMutationVariables) => {
            return client.request(SignUpMutation, data);
        }
    });
}