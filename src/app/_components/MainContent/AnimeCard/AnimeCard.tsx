import React from "react";
import Image from "next/image";
import Katya from "@/../public/photo_2023-10-17_20-43-52.jpg";
import Link from "next/link";
import { Genre, Maybe, Poster } from "@/gql/graphql";
type AnimeCard = {
  id: string;
  title: string;
  description: Maybe<Genre[]> | undefined;
  poster: Poster;
  slug: string;
};
const AnimeCard = ({ title, poster, slug, description }: AnimeCard) => {
  return (
    <article className="flex flex-col mx-auto mb-4 w-[calc(25%-16px)] sm:w-[calc(25%-16px)] md:w-[calc(20%-16px)] lg:max-w-[calc(16.6%-20px)] m-b-2 ">
      <Link className="flex flex-col h-full" href={`/anime/${slug}`}>
        <div className=" rounded-lg bg-default-bg  relative w-full pb-[150%]">
          {" "}
          {/* Adjust percentage for desired aspect ratio */}
          <Image
            loading="lazy"
            fill
            placeholder="blur"
            blurDataURL={poster.originalUrl}
            src={poster.originalUrl}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={title}
            className="rounded-lg object-cover"
          />
        </div>
        <h1 className="dark:text-color-text-accent font-normal overflow-hidden text-ellipsis text-sm mt-2">
          {title}
        </h1>
        <p className="dark:text-color-text overflow-hidden text-xs text-ellipsis">
          {description
            ?.slice(0, 2)
            .map((genre: Genre) => genre.russian)
            .join(", ")}
        </p>
      </Link>
    </article>
  );
};
export default AnimeCard;
