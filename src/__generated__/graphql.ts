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
};

export type Anime = {
  __typename?: 'Anime';
  description: Scalars['String']['output'];
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  licenseNameRu: Scalars['String']['output'];
  name: Scalars['String']['output'];
  poster: Array<Poster>;
  slug: Scalars['String']['output'];
  studios?: Maybe<Array<Studio>>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  russian: Scalars['String']['output'];
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
};


export type QueryAnimeArgs = {
  slug: Scalars['String']['input'];
};

export type Studio = {
  __typename?: 'Studio';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type OneAnimeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OneAnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null } };

export type AllAnimesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnimesQuery = { __typename?: 'Query', allAnimes: Array<{ __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, slug: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, studios?: Array<{ __typename?: 'Studio', id: string, name: string }> | null, poster: Array<{ __typename?: 'Poster', id: string, originalUrl: string, previewUrl: string }> }> };


export const OneAnimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OneAnime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}}]}}]}}]} as unknown as DocumentNode<OneAnimeQuery, OneAnimeQueryVariables>;
export const AllAnimesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]} as unknown as DocumentNode<AllAnimesQuery, AllAnimesQueryVariables>;