import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { VerifyEmailByTokenDocument } from '@/gql/graphql';
import { useMutation } from '@tanstack/react-query';

export const useVerifyEmailMutation = () => {
	const { client } = useGraphQLClient();
	return useMutation({
		mutationFn: async (token: string) => {
			return client.request(VerifyEmailByTokenDocument, { token });
		}
	});
};
