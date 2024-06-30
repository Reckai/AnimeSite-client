"use client";
import React from "react";
import { AwesomeGraphQLClient } from "awesome-graphql-client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql/language/printer";
import { GraphQLClientProvider } from "@/app/context/GraphQLContext/GraphQLClientProvider";
function GraphQLProvider({
  token,
  children,
}: {
  token: string;
  children: React.ReactNode;
}) {
  const client = new AwesomeGraphQLClient({
    endpoint: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    formatQuery: (query: TypedDocumentNode) => print(query),
    fetchOptions: {
      headers: {
        credentials: "include",
        authorization: `Bearer ${token}`,
      },
    },
  });
  return (
    <GraphQLClientProvider defaultClient={client}>
      {children}
    </GraphQLClientProvider>
  );
}

export default GraphQLProvider;
