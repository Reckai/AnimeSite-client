"use client";
import React from "react";
import { GET_ALL_ANIMES, SIGN_IN } from "@/app/_Components/MainContent/Query";
import AnimeCard from "@/app/_Components/MainContent/AnimeCard/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

function MainContent() {
  const { data, isFetching } = useQuery({
    queryKey: ["animes"],
    queryFn: async () => request("http://localhost:4000", GET_ALL_ANIMES),
  });
  console.log(isFetching);
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {data?.allAnimes.map((anime) => (
        <AnimeCard
          id={anime.id}
          slug={anime.slug}
          description={anime.genres}
          poster={anime.poster[0]}
          title={anime.licenseNameRu}
          key={anime.id}
        />
      ))}
    </div>
  );
}

export default MainContent;
