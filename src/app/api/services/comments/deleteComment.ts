import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE_COMMENTS } from '../../Mutations/DeleteComment';
import { Comment, GetCommentsByAnimeIdQuery } from '@/gql/graphql';

export const useDeleteComment = (slug: string) => {
	const { client } = useGraphQLClient();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (commentId: string) => client.request(DELETE_COMMENTS, { commentId }),
		onSuccess: (data) => {
			const deletedCommentId = data.deleteComment.id;
			queryClient.setQueryData([`anime-comments`, slug], (oldData: GetCommentsByAnimeIdQuery) => {
				if (oldData) {
					return {
						...oldData,
						getCommentsByAnimeId: oldData.getCommentsByAnimeId.filter(
							(comment) => comment.id !== deletedCommentId
						)
					};
				}
				return oldData;
			});
		}
	});
};
