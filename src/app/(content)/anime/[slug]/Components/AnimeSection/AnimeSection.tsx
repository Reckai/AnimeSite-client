import React, { Suspense } from "react";
import { Poster } from "@/gql/graphql";
import AboutSection, {
  AboutAnimeSectionProps,
} from "./_components/AboutSection/AboutSection";
import { useGetAnime } from "./hooks/useGetAnime";
import {
  PosterSection,
  PosterSectionProps,
} from "./_components/SideSection/PosterSection/PosterSection";
import NotFound from "@/app/_Components/NotFound/NotFound";

export interface AnimeSectionProps extends AboutAnimeSectionProps {
  poster: Poster | undefined;
  id: string;
  status: string;
}

const AnimeSection = ({ slug }: { slug: string }) => {
  const { result, error } = useGetAnime(slug);
  const posterSectionProps: PosterSectionProps = {
    name: result?.title,
    url: result?.poster?.originalUrl,
    id: result?.id,
    status: result?.status,
  } as PosterSectionProps;
  const aboutAnimeSectionProps: AboutAnimeSectionProps = {
    title: result?.title,
    RuTitle: result?.RuTitle,
    animeListInfo: result?.animeListInfo,
    genres: result?.genres,
    description: result?.description,
  } as AboutAnimeSectionProps;

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <section className="relative z-10">
          <div className="mx-16 flex">
            <aside className="mr-10 flex-none w-64">
              <PosterSection {...posterSectionProps} />
            </aside>

            <AboutSection {...aboutAnimeSectionProps} />
          </div>
        </section>
      )}
    </>
  );
};

export default AnimeSection;
