'use client'
import { gql } from "@/__generated__/gql"
import { useQuery } from "@apollo/client";
import Image from "next/image";
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
    }
  }
  `
)
export default function Page({ params }: { params: { slug: string } }) {
  const { loading, data } = useQuery(
    GET_ANIME,
    // variables are also typed!
    { variables: { slug: params.slug } }
  );
    return <div className="text-white">
     <p >
      {
        data?.anime.name
      }
     </p>
     <p >
{
  data?.anime.description
}
     </p>
      </div>
  }