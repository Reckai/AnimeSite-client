import { graphql } from "@/gql";

export const CHANGE_ANIME_STATUS = graphql(`
mutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {
  changeStatusOfAnime(status: $status, animeId: $animeId)
}`);

export const DELETE_ANIME_STATUS = graphql(`
  mutation deleteAnimeFromWatchingList($animeId: String!) {
    deleteAnimeStatus(animeId: $animeId)
}`)