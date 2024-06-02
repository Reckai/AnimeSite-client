"use client";

import { useMemo } from "react";
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from "@urql/next";

export default function GraphQLProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });
    const client = createClient({
      url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/graphql",
      exchanges: [cacheExchange, ssr, fetchExchange],
      fetchOptions: () => {
        return {
          credentials: "include",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      suspense: true,
    });

    return [client, ssr];
  }, [token]);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
