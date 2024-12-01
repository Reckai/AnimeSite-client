import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";
import { graphql } from "@/gql";
import { SetNewEmailMutationVariables } from "@/gql/graphql";
import { useMutation } from "@tanstack/react-query";

const changeEmail = graphql(`
  mutation SetNewEmail($newEmail: String!, $password: String!) {
  setNewEmail(newEmail: $newEmail, password: $password)
}`)

export const useChangeEmailMutation = () => {
	const { client } = useGraphQLClient();
	return useMutation({
		mutationFn: async (data: SetNewEmailMutationVariables) => {
			return client.request(changeEmail, data);
		}
	});
};


