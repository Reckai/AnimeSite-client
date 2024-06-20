import React from "react";
import { GET_ALL_ANIMES, SIGN_IN } from "@/app/_Components/MainContent/Query";
import AnimeCard from "@/app/_Components/MainContent/AnimeCard/AnimeCard";

function MainContent() {
  // const [result] = useQuery({ query: GET_ALL_ANIMES });

  // console.log(result.fetching);
  // return (
  //   <div className=" grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-4">
  //     {result.data?.allAnimes.map((anime) => (
  //       <AnimeCard
  //         id={anime.id}
  //         slug={anime.slug}
  //         description={anime.genres}
  //         poster={anime.poster[0]}
  //         title={anime.licenseNameRu}
  //         key={anime.id}
  //       />
  //     ))}
  //   </div>
  // );
  return <div>sd</div>;
}

export default MainContent;
