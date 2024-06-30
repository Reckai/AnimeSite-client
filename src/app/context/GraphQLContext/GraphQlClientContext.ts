import { createContext } from "react";
import { AwesomeGraphQLClient } from "awesome-graphql-client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export interface ClientContextProps {
  client: AwesomeGraphQLClient<TypedDocumentNode, RequestInit, Response> | undefined;
  setClient: (client: AwesomeGraphQLClient<TypedDocumentNode, RequestInit, Response> | undefined) => void;
}

export const GraphQLClientContext = createContext<ClientContextProps>({
  client: undefined,
  setClient: () => {},
});

