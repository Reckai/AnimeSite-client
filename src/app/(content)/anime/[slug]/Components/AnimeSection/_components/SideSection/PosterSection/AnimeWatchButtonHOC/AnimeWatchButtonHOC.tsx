import React, { Suspense } from "react";
import AnimeWatchButton from "../AnimeWatchButton/AnimeWatchButton";
import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { GET_ANIME } from "@/app/(content)/anime/[slug]/Query";

const AnimeWatchButtonHOC = ({ id, slug }: { id: string; slug: string }) => {
  const { client } = useGraphQLClient();

  const status = useSuspenseQuery({
    queryKey: [`anime-${slug}`],
    queryFn: async () => client?.request(GET_ANIME, { slug }),
  });

  return (
    <Suspense fallback={<div>asdasd</div>}>
      <AnimeWatchButton
        animeId={id}
        animeStatus={status.data?.anime?.animeLists![0].status!}
      />
    </Suspense>
  );
};

export default AnimeWatchButtonHOC;
