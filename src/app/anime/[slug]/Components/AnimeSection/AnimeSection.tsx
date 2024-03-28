import React from "react";
import { Poster } from "@/__generated__/graphql";
import { PosterSection } from "./SideSection/PosterSection/PosterSection";
import AboutSection, { AboutAnimeProps } from "./AboutSection/AboutSection";

interface AnimeSectionProps extends AboutAnimeProps {
  poster: Poster | undefined;
  id: string;
  status: string;
}

const AnimeSection = ({
  title,
  RuTitle,
  genres,
  description,
  poster,
  animeListInfo,
  id,
  status,
}: AnimeSectionProps) => {
  return (
    <section className="relative z-10 pt-32 ">
      <div className="mx-16 flex">
        <aside className="mr-10 flex-none w-64">
          <PosterSection
            name={title}
            url={poster?.originalUrl}
            id={id}
            status={status}
          />
        </aside>
        <AboutSection
          title={title}
          RuTitle={RuTitle}
          animeListInfo={animeListInfo}
          genres={genres}
          description={description}
        />
      </div>
    </section>
  );
};

export default AnimeSection;
