"use client";
import AnimeSection from "./Components/AnimeSection/AnimeSection";
import { Suspense } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Suspense fallback={<div>...asdasda</div>}>
        <AnimeSection slug={params.slug} />
      </Suspense>
    </div>
  );
}
