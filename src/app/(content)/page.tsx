import React, { Suspense } from "react";
import MainContent from "@/app/_Components/MainContent/MainContent";
import Loading from "@/app/(content)/_components/Loading";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import request from "graphql-request";
import { GET_ALL_ANIMES } from "@/app/_Components/MainContent/Query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["animes"],
    queryFn: async () => request("http://localhost:4000", GET_ALL_ANIMES),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
    </HydrationBoundary>
  );
}
