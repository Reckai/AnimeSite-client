"use client";

import { useMemo } from "react";
import { GraphQLClientContext } from "./GraphQlClientContext";
import { AwesomeGraphQLClient } from "awesome-graphql-client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export interface GraphQlClientProviderProps {
  defaultClient: AwesomeGraphQLClient<TypedDocumentNode, RequestInit, Response>;
  children: React.ReactNode;
}

export const GraphQLClientProvider: React.FC<GraphQlClientProviderProps> = ({
  defaultClient,
  children,
}) => {
  const value = useMemo(
    () => ({
      client: defaultClient,
    }),
    [defaultClient]
  );

  return (
    <GraphQLClientContext.Provider value={value}>
      {children}
    </GraphQLClientContext.Provider>
  );
};
