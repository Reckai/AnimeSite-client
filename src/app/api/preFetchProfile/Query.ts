import { graphql } from '@/gql/gql';

export const profileQuery = graphql(`
	query User {
		me {
			id
			email
			name
			image
			emailVerified
			createdAt
		}
	}
`);
