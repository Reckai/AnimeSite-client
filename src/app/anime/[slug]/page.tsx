"use client";

import { gql, useQuery } from "@apollo/client";
import AnimeSection from "@/app/anime/[slug]/Components/AnimeSection/AnimeSection";
import NotFound from "@/app/Components/NotFound/NotFound";
import Loading from "@/app/Components/Loading/Loading";

const GET_ANIME = gql(
  `
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
  `
);
export default function Page({ params }: { params: { slug: string } }) {
  const { loading, data } = useQuery(
    GET_ANIME,
    // variables are also typed!
    { variables: { slug: params.slug } }
  );

  {
    if (loading) {
      return <Loading />;
    }
  }

  {
    if (!loading && !data?.anime) {
      return <NotFound />;
    }
  }

  {
    if (data) {
      return (
        <div>
          <AnimeSection
            id={data?.anime.id}
            title={data?.anime.name as string}
            animeListInfo={data?.anime.userWatchListStatusDistributions}
            status={
              !data?.anime.animeLists ? "" : data?.anime.animeLists[0].status
            }
            description={data?.anime.description as string}
            genres={data?.anime.genres}
            RuTitle={data?.anime.licenseNameRu as string}
            poster={data?.anime?.poster[0]}
          />
        </div>
      );
    }
  }
}
