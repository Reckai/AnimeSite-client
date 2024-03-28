/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}": types.AllAnimesDocument,
    "\nmutation Mutation($status: AnimeStatus!, $userId: String!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, userId: $userId, animeId: $animeId)\n}": types.MutationDocument,
    "\nquery Anime($slug: String!) {\n  anime(slug: $slug) {\n   \n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      animeLists {\n      status\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n  }\n}\n  ": types.AnimeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}"): (typeof documents)["\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Mutation($status: AnimeStatus!, $userId: String!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, userId: $userId, animeId: $animeId)\n}"): (typeof documents)["\nmutation Mutation($status: AnimeStatus!, $userId: String!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, userId: $userId, animeId: $animeId)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Anime($slug: String!) {\n  anime(slug: $slug) {\n   \n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      animeLists {\n      status\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n  }\n}\n  "): (typeof documents)["\nquery Anime($slug: String!) {\n  anime(slug: $slug) {\n   \n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      animeLists {\n      status\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n  }\n}\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;