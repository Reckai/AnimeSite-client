'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import AnimeCard from '@/app/Components/AnimeCard/AnimeCard';
import {GET_ALL_ANIMES} from '@/app/_components/MainContent/Query';

function MainContent() {
  const { data } = useSuspenseQuery(GET_ALL_ANIMES);
  return (
    <div
      className=" mt-24 grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-4"
    >
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
