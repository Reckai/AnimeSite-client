import React from "react";
import Image from "next/image";
import AnimeWatchButton from "./AnimeWatchButton/AnimeWatchButton";
import { useSession } from "@/app/context/SessionContext/useSession";

type PosterSectionProps = {
  url: string | undefined;
  name: string | undefined;
  id: string;
  status: string;
};

export function PosterSection({ url, name, id, status }: PosterSectionProps) {
  const { session } = useSession();
  return (
    <article className="mb-4 ">
      <div className='mb-4 rounded-lg bg-default-bg   w-auto h-fit before:contents-["s"] items-center justify-center flex  before:pt-[138%]'>
        {url ? (
          <Image
            className="rounded-md"
            alt={name ? "ds" : "sad"}
            src={url}
            width={500}
            height={500}
          />
        ) : (
          "D"
        )}
      </div>
      <div className="flex">
        {session && <AnimeWatchButton animeId={id} animeStatus={status} />}
      </div>
    </article>
  );
}
