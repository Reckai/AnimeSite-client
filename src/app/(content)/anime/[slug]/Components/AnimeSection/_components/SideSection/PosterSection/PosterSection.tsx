"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { useSession } from "@/app/context/SessionContext/useSession";
import AnimeWatchButtonHOC from "./AnimeWatchButtonHOC/AnimeWatchButtonHOC";

export type PosterSectionProps = {
  url: string | undefined;
  name: string | undefined;
  id: string;
  slug: string;
};
export function PosterSection({ url, name, id, slug }: PosterSectionProps) {
  const { session } = useSession();
  return (
    <article className="mb-4 ">
      <div className='mb-4 rounded-lg bg-default-bg   w-auto h-fit before:contents-["s"] items-center justify-center flex  before:mt-[138%]'>
        {url ? (
          <Image
            placeholder="empty"
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
        {session && <AnimeWatchButtonHOC id={id} slug={slug} />}
      </div>
    </article>
  );
}
