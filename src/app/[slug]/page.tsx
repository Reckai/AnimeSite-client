'use client'
import { gql } from "@/__generated__/gql"
import { useQuery } from "@apollo/client";
import Image from "next/image";
import AnimeBG  from "../../../public/no-bg.GtEBCO-Z.jpg";
import AnimeSection from "@/app/[slug]/Components/AnimeSection/AnimeSection";

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
  const ImageAlt ='Anime Image'
    return <div>
      <div className= "top-0 left-0 absolute h-[512px] w-full after:w-full after:top-0 after:left-0 after:absolute after:bg-bg-color/80  after:h-[512px] after:content-[' '] ">
      <Image className="object-cover  h-full w-full"
       alt={ImageAlt} src={AnimeBG}></Image>
      <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-transparent to-bg-color  "></div>
      </div>

  <div className="relative z-10 pt-48">
  <AnimeSection/>
  </div>
      </div>
  }
