'use client';

import { useSession } from '@/app/context/SessionContext/useSession';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UPLOAD_AVATAR_MUTATION = `
  mutation UploadImage($input: ImageUploadInput!) {
  uploadImage(input: $input) {
    success
    image {
      id
      filename
      path
      url
      blurhash
    }
    error
  }
}
`;

export function useAvatarMutation() {
  const queryClient = useQueryClient();
  const { updateSessionField } = useSession();
  return useMutation({
    mutationFn: async (file: Blob) => {
      const formData = new FormData();

      const operations = {
        query: UPLOAD_AVATAR_MUTATION,
        variables: {
          input: {
            file: null,
            type: 'AVATAR'
          }
        }
      };

      const map = {
        '0': ['variables.input.file']
      };

      formData.append('operations', JSON.stringify(operations));
      formData.append('map', JSON.stringify(map));
      formData.append('0', file, 'avatar.png');

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: 'POST',
        headers: {
          'apollo-require-preflight': 'true'
        },
        credentials: 'include',
        body: formData
      });

      return response.json();
    },
    onSuccess: (response) => {
      if (response.data.uploadImage.success) {
        queryClient.invalidateQueries({ queryKey: ['profileData'] });
      }
      updateSessionField('image', response.data.uploadImage.image.url as string);
    }
  });
}