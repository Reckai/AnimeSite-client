"use client";

import NotFound from "@/app/Components/NotFound/NotFound";
import Loading from "@/app/Components/Loading/Loading";
import AnimeSection from "./Components/AnimeSection/AnimeSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { graphql } from "@/gql";
import { useQuery } from "@urql/next";

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
export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);

  const [animes, setAinmes] = useState();
  const [result] = useQuery({
    query: GET_ANIME,
    variables: { slug: params.slug },
  });

  return (
    <div>
      {result.data ? (
        <div>
          <AnimeSection
            id={result.data?.anime.id}
            title={result.data?.anime.name as string}
            animeListInfo={result.data?.anime.userWatchListStatusDistributions}
            status={
              !result.data?.anime.animeLists
                ? ""
                : result.data?.anime.animeLists[0].status
            }
            description={result.data?.anime.description as string}
            genres={result.data?.anime.genres}
            RuTitle={result.data?.anime.licenseNameRu as string}
            poster={result.data?.anime?.poster[0]}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
