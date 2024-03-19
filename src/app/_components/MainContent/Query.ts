import { gql } from "@apollo/client";


export const GET_ALL_ANIMES = gql(`
 query AllAnimes {
 allAnimes {
    id
    name
    licenseNameRu
    description
    genres {
      id
      name
      russian
    }
    slug
    poster {
      id
      originalUrl
      previewUrl
    }
  }
}`);
