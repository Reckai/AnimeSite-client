import { graphql } from "@/gql/gql";
import { useQuery } from "@urql/next";
import {AnimeSectionProps} from '../AnimeSection'
const GET_ANIME = graphql(`
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
      animeLists {
        status
      }
      userWatchListStatusDistributions {
        status
        count
      }
    }
  }
`);

export const useGetAnime = (slug: string) => {
    const [result] = useQuery({
        query: GET_ANIME,
        variables: {slug},
      });
  const animeData = result.data?.anime;
  const AnimeSectionProps: AnimeSectionProps = {
    id: animeData?.id,
    title: animeData?.name,
    animeListInfo: animeData?.userWatchListStatusDistributions,
    status: !animeData?.animeLists?.length
      ? ""
      : animeData.animeLists[0].status,
    description: animeData?.description,
    genres: animeData?.genres,
    RuTitle: animeData?.licenseNameRu,
    poster: animeData?.poster[0],
  } as AnimeSectionProps;

    return {result: result.data && AnimeSectionProps, error: result.error};
}