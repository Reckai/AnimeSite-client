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
    "\nmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, animeId: $animeId)\n}": types.ChangeAnimeStatusMutationDocument,
    "\n  mutation deleteAnimeFromWatchingList($animeId: String!) {\n    deleteAnimeStatus(animeId: $animeId)\n}": types.DeleteAnimeFromWatchingListDocument,
    "\n     query OneAnime($slug: String!) {\n      anime(slug: $slug) {\n        id\n        name\n        licenseNameRu\n        description\n        genres {\n          id\n          name\n          russian\n        }\n        poster {\n          originalUrl\n          id\n          previewUrl\n        }\n        \n        userWatchListStatusDistributions {\n          status\n          count\n        }\n        animeLists {\n          id\n          status\n        }\n        studios {\n          id\n          name\n        }\n      }\n    }\n\n  ": types.OneAnimeDocument,
    "\n\nmutation Mutation($args: UserLoginInput!) {\nloginUser(args: $args) {\n  user {\n    id\n      email\n      name\n      image\n      role\n      createdAt\n  }\n}\n}": types.MutationDocument,
    "\n    mutation SignupUser($password: String!, $email: String!) {\n      signupUser(password: $password, email: $email)\n    }\n  ": types.SignupUserDocument,
    "mutation LoginWiaGoogle($token: String!) {\n    loginWiaGoogle(token: $token) {\n      id\n      email\n      name\n      createdAt\n      image\n    }\n  }": types.LoginWiaGoogleDocument,
    "\n    mutation VerifyEmailByToken($token: String!) {\n      VerifyEmailByToken(token: $token) {\n        message\n        success\n      }\n    }\n  ": types.VerifyEmailByTokenDocument,
    "\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}": types.AllAnimesDocument,
    "\nmutation signInMutation($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    user {\n      id\n    }\n  }\n}\n": types.SignInMutationDocument,
    "\n  query Me {\n    me {\n      id\n      email\n      name\n      image\n      role\n      createdAt\n    }\n  }\n": types.MeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, animeId: $animeId)\n}"): (typeof documents)["\nmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n  changeStatusOfAnime(status: $status, animeId: $animeId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteAnimeFromWatchingList($animeId: String!) {\n    deleteAnimeStatus(animeId: $animeId)\n}"): (typeof documents)["\n  mutation deleteAnimeFromWatchingList($animeId: String!) {\n    deleteAnimeStatus(animeId: $animeId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n     query OneAnime($slug: String!) {\n      anime(slug: $slug) {\n        id\n        name\n        licenseNameRu\n        description\n        genres {\n          id\n          name\n          russian\n        }\n        poster {\n          originalUrl\n          id\n          previewUrl\n        }\n        \n        userWatchListStatusDistributions {\n          status\n          count\n        }\n        animeLists {\n          id\n          status\n        }\n        studios {\n          id\n          name\n        }\n      }\n    }\n\n  "): (typeof documents)["\n     query OneAnime($slug: String!) {\n      anime(slug: $slug) {\n        id\n        name\n        licenseNameRu\n        description\n        genres {\n          id\n          name\n          russian\n        }\n        poster {\n          originalUrl\n          id\n          previewUrl\n        }\n        \n        userWatchListStatusDistributions {\n          status\n          count\n        }\n        animeLists {\n          id\n          status\n        }\n        studios {\n          id\n          name\n        }\n      }\n    }\n\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation Mutation($args: UserLoginInput!) {\nloginUser(args: $args) {\n  user {\n    id\n      email\n      name\n      image\n      role\n      createdAt\n  }\n}\n}"): (typeof documents)["\n\nmutation Mutation($args: UserLoginInput!) {\nloginUser(args: $args) {\n  user {\n    id\n      email\n      name\n      image\n      role\n      createdAt\n  }\n}\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SignupUser($password: String!, $email: String!) {\n      signupUser(password: $password, email: $email)\n    }\n  "): (typeof documents)["\n    mutation SignupUser($password: String!, $email: String!) {\n      signupUser(password: $password, email: $email)\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LoginWiaGoogle($token: String!) {\n    loginWiaGoogle(token: $token) {\n      id\n      email\n      name\n      createdAt\n      image\n    }\n  }"): (typeof documents)["mutation LoginWiaGoogle($token: String!) {\n    loginWiaGoogle(token: $token) {\n      id\n      email\n      name\n      createdAt\n      image\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation VerifyEmailByToken($token: String!) {\n      VerifyEmailByToken(token: $token) {\n        message\n        success\n      }\n    }\n  "): (typeof documents)["\n    mutation VerifyEmailByToken($token: String!) {\n      VerifyEmailByToken(token: $token) {\n        message\n        success\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}"): (typeof documents)["\n query AllAnimes {\n allAnimes {\n    id\n    name\n    licenseNameRu\n    description\n    genres {\n      id\n      name\n      russian\n    }\n    slug\n    poster {\n      id\n      originalUrl\n      previewUrl\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation signInMutation($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    user {\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation signInMutation($args: UserLoginInput!) {\n  loginUser(args: $args) {\n    user {\n      id\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      email\n      name\n      image\n      role\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      email\n      name\n      image\n      role\n      createdAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;