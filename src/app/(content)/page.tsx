import React, { Suspense } from "react";
import MainContent from "@/app/_Components/MainContent/MainContent";
import Loading from "@/app/(content)/_components/Loading";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { GET_ALL_ANIMES } from "@/app/_Components/MainContent/Query";
import { getClientWithoutAuthorization } from "@/lib/gqlClientWithoutAuthorization";
import { fetchAnimes } from "../_Components/MainContent/action";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["animes"],
    queryFn: fetchAnimes,
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
    </HydrationBoundary>
  );
}
