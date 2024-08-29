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
query animeComments($slug: String!){
	anime(slug: $slug){
	comments{
		id
		message
		createdAt
		parentId
		viewerCanDelete
		viewerCanUpdate
		animeId
	}
	}
}
`)