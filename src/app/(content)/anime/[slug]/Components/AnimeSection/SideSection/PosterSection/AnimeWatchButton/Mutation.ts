import { graphql } from "@/gql";

export const CHANGE_ANIME_STATUS = graphql(`
mutation changeAnimeStatusMutation($status: AnimeStatus!, $userId: String!, $animeId: String!) {
  changeStatusOfAnime(status: $status, userId: $userId, animeId: $animeId)
}`);
