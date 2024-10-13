import { graphql } from '@/gql';

export const GET_ANIME = graphql(`
	query OneAnime($slug: String!) {
		anime(slug: $slug) {
			id
			name
			licenseNameRu
			description
			genres {
				id
				name
				russian
			}
			poster {
				originalUrl
				id
				previewUrl
			}

			userWatchListStatusDistributions {
				status
				count
			}
			animeLists {
				id
				status
			}
			studios {
				id
				name
			}
		}
	}
`);

export const GET_COMMENTS = graphql(`
	query GetCommentsByAnimeId($orderBy: SortOrder, $slug: String!) {
		getCommentsByAnimeId(orderBy: $orderBy, slug: $slug) {
			id
			message
			createdAt
			parentId
			userCanDelete
			userCanUpdate
			isUserLikeComment
			animeId
			anime {
				slug
			}
			user {
				id
				name
				image
			}
			likes {
				userId
			}
		}
	}
`);
