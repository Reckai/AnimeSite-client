/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type Anime = {
  __typename?: 'Anime';
  animeLists?: Maybe<Array<AnimeList>>;
  description: Scalars['String']['output'];
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  licenseNameRu: Scalars['String']['output'];
  name: Scalars['String']['output'];
  poster: Array<Poster>;
  slug: Scalars['String']['output'];
  studios?: Maybe<Array<Studio>>;
  userWatchListStatusDistributions: Array<AnimeListStatusDistribution>;
};

export type AnimeList = {
  __typename?: 'AnimeList';
  anime: Anime;
  id: Scalars['ID']['output'];
  status: AnimeStatus;
  user: User;
};

export type AnimeListInfo = {
  __typename?: 'AnimeListInfo';
  status: AnimeStatus;
  userCount: Scalars['Int']['output'];
};

export type AnimeListStatusDistribution = {
  __typename?: 'AnimeListStatusDistribution';
  count: Scalars['Float']['output'];
  status: AnimeStatus;
};

/** Статусы аниме в списке пользователя */
export enum AnimeStatus {
  Completed = 'COMPLETED',
  Delayed = 'DELAYED',
  Dropped = 'DROPPED',
  Planned = 'PLANNED',
  Watching = 'WATCHING'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  RefreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Array<User>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  depth: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Reply>>;
  threadId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  viewerCanDelete: Scalars['Boolean']['output'];
  viewerCanUpdate: Scalars['Boolean']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  russian: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserWatchList: Scalars['Boolean']['output'];
  deleteAllUsers: Scalars['Boolean']['output'];
  loginUser: AuthPayload;
  logout: Scalars['Boolean']['output'];
  refreshToken: RefreshTokenPayload;
  signupUser: AuthPayload;
  updateUserWatchList: Scalars['Boolean']['output'];
};


export type MutationCreateUserWatchListArgs = {
  animeId: Scalars['String']['input'];
  status: AnimeStatus;
  userId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  args: UserLoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationSignupUserArgs = {
  args: UserLoginInput;
};


export type MutationUpdateUserWatchListArgs = {
  animeListId: Scalars['String']['input'];
  newStatus: AnimeStatus;
};

export type Poster = {
  __typename?: 'Poster';
  id: Scalars['ID']['output'];
  originalUrl: Scalars['String']['output'];
  previewUrl: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allAnimes: Array<Anime>;
  anime: Anime;
  getAnimeListInfo?: Maybe<Array<AnimeListInfo>>;
  me: User;
};


export type QueryAnimeArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetAnimeListInfoArgs = {
  animeId: Scalars['String']['input'];
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  RefreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Reply = {
  __typename?: 'Reply';
  author?: Maybe<Array<User>>;
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  threadId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  viewerCanDelete: Scalars['Boolean']['output'];
  viewerCanUpdate: Scalars['Boolean']['output'];
};

export type Studio = {
  __typename?: 'Studio';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  animeList?: Maybe<Array<AnimeList>>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  replies?: Maybe<Array<Reply>>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OneAnimeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OneAnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, poster: Array<{ __typename?: 'Poster', originalUrl: string, id: string, previewUrl: string }>, userWatchListStatusDistributions: Array<{ __typename?: 'AnimeListStatusDistribution', status: AnimeStatus, count: number }> } };

export type SignUpMutationVariables = Exact<{
  args: UserLoginInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'AuthPayload', token: string, RefreshToken: string, user: { __typename?: 'User', id: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, email: string } };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenPayload', token: string, RefreshToken: string } };

export type AllAnimesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnimesQuery = { __typename?: 'Query', allAnimes: Array<{ __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, slug: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, studios?: Array<{ __typename?: 'Studio', id: string, name: string }> | null, poster: Array<{ __typename?: 'Poster', id: string, originalUrl: string, previewUrl: string }> }> };


export const OneAnimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OneAnime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userWatchListStatusDistributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<OneAnimeQuery, OneAnimeQueryVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"RefreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"RefreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const AllAnimesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]} as unknown as DocumentNode<AllAnimesQuery, AllAnimesQueryVariables>;