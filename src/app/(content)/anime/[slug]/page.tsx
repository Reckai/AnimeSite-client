import NotFound from "@/app/_Components/NotFound/NotFound";
import AnimeLoading from "./Components/AnimeSection/AnimeLoading";
import AnimeSection from "./Components/AnimeSection/AnimeSection";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getClientWithAuthorization } from "@/lib/gqlClient";
import { GET_ANIME } from "./Query";

export default function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: [`anime-${params.slug}`],
    queryFn: () =>
      getClientWithAuthorization().request(GET_ANIME, {
        slug: params.slug,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AnimeLoading />}>
        <AnimeSection slug={params.slug} />
      </Suspense>
    </HydrationBoundary>
  );
}
