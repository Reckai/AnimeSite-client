import { gql } from '@apollo/client';

export const CHANGE_ANIME_STATUS = gql(`
mutation Mutation($status: AnimeStatus!, $userId: String!, $animeId: String!) {
  changeStatusOfAnime(status: $status, userId: $userId, animeId: $animeId)
}`);
