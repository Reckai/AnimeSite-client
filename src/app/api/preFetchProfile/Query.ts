import { graphql } from '@/gql/gql';

export const profileQuery = graphql(`
	query User {
		me {
			id
			email
			name
			currentAvatar {
      id
      url
      thumbnailUrl
      blurhash
    }
			emailVerified
			createdAt
		}
	}
`);
