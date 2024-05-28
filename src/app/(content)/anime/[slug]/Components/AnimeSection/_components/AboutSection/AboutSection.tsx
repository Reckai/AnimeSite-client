import React from "react";
import {
  AboutAnimeHeader,
  AboutAnimeHeaderProps,
} from "./Header/AboutAnimeHeader";
import Button from "./GenreButton/Button";
import InfoButton from "./AnimeInListInfograph/InfoButton/InfoButton";
import AnimeListInfograph, {
  AnimeListInfographProps,
} from "./AnimeInListInfograph/AnimeListInfograph";
import { Anime } from "@/gql/graphql";

export type AboutAnimeSectionProps = AboutAnimeHeaderProps &
  AnimeListInfographProps & {
    description: Anime["description"];
    genres: Anime["genres"];
  };

function AboutSection({
  title,
  RuTitle,
  description,
  genres,
  animeListInfo,
}: AboutAnimeSectionProps) {
  console.log(animeListInfo);
  return (
    <div className="mt-8">
      <AboutAnimeHeader title={title} RuTitle={RuTitle} />
      <div className=" flex mt-4  mb-4 gap-1">
        {genres?.map((genre) => (
          <Button
            key={genre.id}
            text={genre.russian}
            href={`/genre/${genre.name}`}
          />
        ))}
      </div>
      <article className="py-3 mb-3 leading-snug text-color-text break-words">
        {description}
      </article>
      <article>
        {animeListInfo?.length ? (
          <AnimeListInfograph animeListInfo={animeListInfo} />
        ) : null}
      </article>
    </div>
  );
}

export default AboutSection;
