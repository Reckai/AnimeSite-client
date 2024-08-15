'use server'
import { AwesomeGraphQLClient } from "awesome-graphql-client";
import { GraphQLClient } from "graphql-request";
import { GET_ALL_ANIMES } from "./Query";
import { print } from "graphql/language/printer";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";


const client = new AwesomeGraphQLClient({endpoint: "http://localhost:4000", formatQuery: (query: TypedDocumentNode) => print(query), });

export const fetchAnimes = async ({ pageParam = 1, limit = 20 }) => {
   const res = await client.request(GET_ALL_ANIMES, {
        page: pageParam,
        limit
    })
    return res.allAnimes;
  
}