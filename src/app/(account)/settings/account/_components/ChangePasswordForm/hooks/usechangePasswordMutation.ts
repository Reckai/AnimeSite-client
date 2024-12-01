import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";
import { graphql } from "@/gql";
import { SetNewPasswordMutationVariables } from "@/gql/graphql";
import { useMutation } from "@tanstack/react-query";

const changePassword = graphql(`
    mutation SetNewPassword($newPassword: String!, $oldPassword: String!) {
  setNewPassword(newPassword: $newPassword, oldPassword: $oldPassword)
}`)

export const useChangePasswordMutation = () => {
	const { client } = useGraphQLClient();
	return useMutation({
		mutationFn: async (data: SetNewPasswordMutationVariables) => {
			return client.request(changePassword, data);
		}
	});
};
