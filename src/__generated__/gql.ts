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
    "\n  query OneAnime($slug: String!) {\n    anime(slug: $slug) {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n    }\n  }\n  ": types.OneAnimeDocument,
    "\nmutation SignUp($args: UserLoginInput!) {\n  signupUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}": types.SignUpDocument,
    "\nmutation LoginUser($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}": types.LoginUserDocument,
    "\nquery Me {\n  me {\n    id\n    name\n    email\n  }\n}": types.MeDocument,
    "\nmutation RefreshToken($token: String!) {\n  refreshToken(token: $token) {\n    token\n    RefreshToken\n  }\n}": types.RefreshTokenDocument,
    "\n  query AllAnimes {\n    allAnimes {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      slug\n      studios {\n        id\n        name\n      }\n      poster {\n        id\n        originalUrl\n        previewUrl\n      }\n    }\n  }\n  ": types.AllAnimesDocument,
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
export function gql(source: "\n  query OneAnime($slug: String!) {\n    anime(slug: $slug) {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n    }\n  }\n  "): (typeof documents)["\n  query OneAnime($slug: String!) {\n    anime(slug: $slug) {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      poster {\n        originalUrl\n        id\n        previewUrl\n      }\n      userWatchListStatusDistributions {\n        status\n        count\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SignUp($args: UserLoginInput!) {\n  signupUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}"): (typeof documents)["\nmutation SignUp($args: UserLoginInput!) {\n  signupUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation LoginUser($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}"): (typeof documents)["\nmutation LoginUser($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    token\n    RefreshToken\n    user {\n      id\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Me {\n  me {\n    id\n    name\n    email\n  }\n}"): (typeof documents)["\nquery Me {\n  me {\n    id\n    name\n    email\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RefreshToken($token: String!) {\n  refreshToken(token: $token) {\n    token\n    RefreshToken\n  }\n}"): (typeof documents)["\nmutation RefreshToken($token: String!) {\n  refreshToken(token: $token) {\n    token\n    RefreshToken\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllAnimes {\n    allAnimes {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      slug\n      studios {\n        id\n        name\n      }\n      poster {\n        id\n        originalUrl\n        previewUrl\n      }\n    }\n  }\n  "): (typeof documents)["\n  query AllAnimes {\n    allAnimes {\n      id\n      name\n      licenseNameRu\n      description\n      genres {\n        id\n        name\n        russian\n      }\n      slug\n      studios {\n        id\n        name\n      }\n      poster {\n        id\n        originalUrl\n        previewUrl\n      }\n    }\n  }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;