import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CREATE_COMMENT } from '../../Mutations';

export const useCreateComment = (slug: string) => {
	const { client } = useGraphQLClient();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({
			message,
			animeId,
			parentId
		}: {
			message: string;
			animeId: string;
			parentId?: string;
		}) => client.request(CREATE_COMMENT, { animeId, message, parentId: parentId }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`anime-comments`, slug] });
		}
	});
};
