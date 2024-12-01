'use client';

import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useSession } from '@/app/context/SessionContext/useSession';
import { graphql } from '@/gql';
import { MutationDeleteAvatarArgs } from '@/gql/graphql';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DELETE_AVATAR_MUTATION = graphql(`
mutation DeleteAvatar($userId: String!) {
  DeleteAvatar(userId: $userId)
}`)

export function useDeleteAvatarMutation() {
  const queryClient = useQueryClient();
  const {client} = useGraphQLClient();
  const { updateSessionField } = useSession();
  return useMutation({
    mutationFn: async (data: MutationDeleteAvatarArgs) => client.request(DELETE_AVATAR_MUTATION, data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['profileData'] });
      if (response) {
        updateSessionField('image', undefined);
      }
    }
  });
}

