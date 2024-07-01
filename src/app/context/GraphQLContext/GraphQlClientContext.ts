import { createContext } from "react";
import { AwesomeGraphQLClient } from "awesome-graphql-client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export interface ClientContextProps {
  client: AwesomeGraphQLClient<TypedDocumentNode, RequestInit, Response>;
  setClient: (client: AwesomeGraphQLClient<TypedDocumentNode, RequestInit, Response>) => void;
}

// Создаем контекст с неопределенным значением по умолчанию, но типы показывают, что клиент всегда существует
export const GraphQLClientContext = createContext<ClientContextProps>(undefined!);