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
  Tokens: Scalars['Boolean']['output'];
  VerifyEmailByToken: VerifyEmailResponse;
  changeStatusOfAnime: AnimeStatus;
  deleteAllUsers: Scalars['Boolean']['output'];
  deleteAnimeStatus: Scalars['Boolean']['output'];
  loginUser: AuthPayload;
  signupUser: Scalars['String']['output'];
};


export type MutationVerifyEmailByTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationChangeStatusOfAnimeArgs = {
  animeId: Scalars['String']['input'];
  status: AnimeStatus;
};


export type MutationDeleteAnimeStatusArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  args: UserLoginInput;
};


export type MutationSignupUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
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

export type Session = {
  __typename?: 'Session';
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  refreshToken?: Maybe<Array<Session>>;
  replies?: Maybe<Array<Reply>>;
  role?: Maybe<UsersRoles>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Users roles in the system */
export enum UsersRoles {
  Admin = 'ADMIN',
  User = 'USER'
}

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ChangeAnimeStatusMutationMutationVariables = Exact<{
  status: AnimeStatus;
  animeId: Scalars['String']['input'];
}>;


export type ChangeAnimeStatusMutationMutation = { __typename?: 'Mutation', changeStatusOfAnime: AnimeStatus };

export type DeleteAnimeFromWatchingListMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
}>;


export type DeleteAnimeFromWatchingListMutation = { __typename?: 'Mutation', deleteAnimeStatus: boolean };

export type OneAnimeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OneAnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, poster: Array<{ __typename?: 'Poster', originalUrl: string, id: string, previewUrl: string }>, userWatchListStatusDistributions: Array<{ __typename?: 'AnimeListStatusDistribution', status: AnimeStatus, count: number }>, animeLists?: Array<{ __typename?: 'AnimeList', id: string, status: AnimeStatus }> | null, studios?: Array<{ __typename?: 'Studio', id: string, name: string }> | null } };

export type MutationMutationVariables = Exact<{
  args: UserLoginInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, name?: string | null, image?: string | null, role?: UsersRoles | null, createdAt: any } } };

export type SignupUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type SignupUserMutation = { __typename?: 'Mutation', signupUser: string };

export type VerifyEmailByTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailByTokenMutation = { __typename?: 'Mutation', VerifyEmailByToken: { __typename?: 'VerifyEmailResponse', message: string, success: boolean } };

export type AllAnimesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnimesQuery = { __typename?: 'Query', allAnimes: Array<{ __typename?: 'Anime', id: string, name: string, licenseNameRu: string, description: string, slug: string, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, poster: Array<{ __typename?: 'Poster', id: string, originalUrl: string, previewUrl: string }> }> };

export type SignInMutationMutationVariables = Exact<{
  args: UserLoginInput;
}>;


export type SignInMutationMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, name?: string | null, image?: string | null, role?: UsersRoles | null, createdAt: any } };


export const ChangeAnimeStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeAnimeStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnimeStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeStatusOfAnime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"animeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}}}]}]}}]} as unknown as DocumentNode<ChangeAnimeStatusMutationMutation, ChangeAnimeStatusMutationMutationVariables>;
export const DeleteAnimeFromWatchingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAnimeFromWatchingList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAnimeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"animeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}}}]}]}}]} as unknown as DocumentNode<DeleteAnimeFromWatchingListMutation, DeleteAnimeFromWatchingListMutationVariables>;
export const OneAnimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OneAnime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userWatchListStatusDistributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"animeLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<OneAnimeQuery, OneAnimeQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const SignupUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SignupUserMutation, SignupUserMutationVariables>;
export const VerifyEmailByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmailByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"VerifyEmailByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailByTokenMutation, VerifyEmailByTokenMutationVariables>;
export const AllAnimesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]} as unknown as DocumentNode<AllAnimesQuery, AllAnimesQueryVariables>;
export const SignInMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signInMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutationMutation, SignInMutationMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;