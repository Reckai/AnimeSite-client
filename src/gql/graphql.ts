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
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type AllAnimeResponse = {
  __typename?: 'AllAnimeResponse';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Anime>;
  totalCount: Scalars['Float']['output'];
};

export type Anime = {
  __typename?: 'Anime';
  animeLists?: Maybe<Array<AnimeList>>;
  comments?: Maybe<Array<Comment>>;
  description?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  licenseNameRu?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Array<Poster>>;
  slug: Scalars['String']['output'];
  studios?: Maybe<Array<Studio>>;
  userWatchListStatusDistributions: Array<AnimeListStatusDistribution>;
};

export type AnimeFilterParams = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Scalars['JSONObject']['input']>;
  orderBy?: InputMaybe<Scalars['JSONObject']['input']>;
  ruName?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
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
  anime: Anime;
  animeId: Scalars['String']['output'];
  children: Array<Comment>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isUserLikeComment: Scalars['Boolean']['output'];
  likes: Array<Like>;
  message: Scalars['String']['output'];
  parent?: Maybe<Comment>;
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userCanDelete: Scalars['Boolean']['output'];
  userCanUpdate: Scalars['Boolean']['output'];
  userId: Scalars['String']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  russian: Scalars['String']['output'];
};

export type GenreFilterFields = {
  __typename?: 'GenreFilterFields';
  id: Scalars['String']['output'];
  russian: Scalars['String']['output'];
};

export type GenreFilterResult = {
  __typename?: 'GenreFilterResult';
  count: Scalars['Int']['output'];
  genres: Array<Maybe<GenreFilterFields>>;
};

export type Image = {
  __typename?: 'Image';
  blurhash?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  filename: Scalars['String']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  type: ImageType;
  updatedAt: Scalars['DateTimeISO']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};

export enum ImageType {
  Avatar = 'AVATAR',
  Cover = 'COVER',
  General = 'GENERAL'
}

export type ImageUploadInput = {
  file: Scalars['Upload']['input'];
  type: ImageType;
};

export type ImageUploadResponse = {
  __typename?: 'ImageUploadResponse';
  error?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  success: Scalars['Boolean']['output'];
};

export type Like = {
  __typename?: 'Like';
  commentId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteAvatar: Scalars['Boolean']['output'];
  VerifyEmailByToken: VerifyEmailResponse;
  changeNickName: Scalars['Boolean']['output'];
  changeStatusOfAnime: AnimeStatus;
  createComment: Comment;
  deleteAllUsers: Scalars['Boolean']['output'];
  deleteAnimeStatus: Scalars['Boolean']['output'];
  deleteComment: Comment;
  likeComment: Scalars['Float']['output'];
  loginUser: AuthPayload;
  loginWiaGoogle: User;
  setNewEmail: Scalars['Boolean']['output'];
  setNewPassword: Scalars['Boolean']['output'];
  signupUser: Scalars['String']['output'];
  updateComment: Comment;
  uploadImage: ImageUploadResponse;
};


export type MutationDeleteAvatarArgs = {
  userId: Scalars['String']['input'];
};


export type MutationVerifyEmailByTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationChangeNickNameArgs = {
  newNickName: Scalars['String']['input'];
};


export type MutationChangeStatusOfAnimeArgs = {
  animeId: Scalars['String']['input'];
  status: AnimeStatus;
};


export type MutationCreateCommentArgs = {
  animeId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAnimeStatusArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  args: UserLoginInput;
};


export type MutationLoginWiaGoogleArgs = {
  token: Scalars['String']['input'];
};


export type MutationSetNewEmailArgs = {
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSetNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationSignupUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  commentId: Scalars['String']['input'];
  message: Scalars['String']['input'];
};


export type MutationUploadImageArgs = {
  input: ImageUploadInput;
};

export type PaginatedAnimeResult = {
  __typename?: 'PaginatedAnimeResult';
  animes?: Maybe<Array<Anime>>;
  count: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
};

export type Poster = {
  __typename?: 'Poster';
  id: Scalars['ID']['output'];
  originalUrl: Scalars['String']['output'];
  previewUrl: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allAnimes: AllAnimeResponse;
  anime: Anime;
  animesWithFilter: PaginatedAnimeResult;
  fetchReleasesFilters: ReleasesFilters;
  getAnimeListInfo?: Maybe<Array<AnimeListInfo>>;
  getCommentsByAnimeId: Array<Comment>;
  me: User;
};


export type QueryAllAnimesArgs = {
  page: Scalars['Float']['input'];
};


export type QueryAnimeArgs = {
  slug: Scalars['String']['input'];
};


export type QueryAnimesWithFilterArgs = {
  filter: AnimeFilterParams;
};


export type QueryGetAnimeListInfoArgs = {
  animeId: Scalars['String']['input'];
};


export type QueryGetCommentsByAnimeIdArgs = {
  orderBy?: InputMaybe<SortOrder>;
  slug: Scalars['String']['input'];
};

export type ReleasesFilters = {
  __typename?: 'ReleasesFilters';
  genres: Array<GenreFilterResult>;
  studios: Array<StudioFilterResult>;
};

export type Reply = {
  __typename?: 'Reply';
  author?: Maybe<Array<User>>;
  comments?: Maybe<Array<Comment>>;
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

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortField {
  CreatedAt = 'CREATED_AT',
  Popularity = 'POPULARITY'
}

export type SortOrder = {
  direction: SortDirection;
  field: SortField;
};

export type Studio = {
  __typename?: 'Studio';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type StudioFilterFields = {
  __typename?: 'StudioFilterFields';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type StudioFilterResult = {
  __typename?: 'StudioFilterResult';
  count: Scalars['Float']['output'];
  studios: Array<Maybe<StudioFilterFields>>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Account>>;
  animeList?: Maybe<Array<AnimeList>>;
  avatarId?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTimeISO']['output'];
  currentAvatar?: Maybe<Image>;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Array<Session>>;
  replies?: Maybe<Array<Reply>>;
  role: UsersRoles;
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

export type DeleteAvatarMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type DeleteAvatarMutation = { __typename?: 'Mutation', DeleteAvatar: boolean };

export type SetNewEmailMutationVariables = Exact<{
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SetNewEmailMutation = { __typename?: 'Mutation', setNewEmail: boolean };

export type SetNewPasswordMutationVariables = Exact<{
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
}>;


export type SetNewPasswordMutation = { __typename?: 'Mutation', setNewPassword: boolean };

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


export type OneAnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', id: string, name?: string | null, licenseNameRu?: string | null, description?: string | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string, russian: string }> | null, poster?: Array<{ __typename?: 'Poster', originalUrl: string, id: string, previewUrl: string }> | null, userWatchListStatusDistributions: Array<{ __typename?: 'AnimeListStatusDistribution', status: AnimeStatus, count: number }>, animeLists?: Array<{ __typename?: 'AnimeList', id: string, status: AnimeStatus }> | null, studios?: Array<{ __typename?: 'Studio', id: string, name: string }> | null } };

export type GetCommentsByAnimeIdQueryVariables = Exact<{
  orderBy?: InputMaybe<SortOrder>;
  slug: Scalars['String']['input'];
}>;


export type GetCommentsByAnimeIdQuery = { __typename?: 'Query', getCommentsByAnimeId: Array<{ __typename?: 'Comment', id: string, message: string, createdAt: any, parentId?: string | null, userCanDelete: boolean, userCanUpdate: boolean, isUserLikeComment: boolean, animeId: string, anime: { __typename?: 'Anime', slug: string }, user: { __typename?: 'User', id: string, name?: string | null }, likes: Array<{ __typename?: 'Like', userId: string }> }> };

export type MutationMutationVariables = Exact<{
  args: UserLoginInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, name?: string | null, role: UsersRoles, createdAt: any } } };

export type SignupUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type SignupUserMutation = { __typename?: 'Mutation', signupUser: string };

export type LoginWiaGoogleMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LoginWiaGoogleMutation = { __typename?: 'Mutation', loginWiaGoogle: { __typename?: 'User', id: string, email: string, name?: string | null, createdAt: any } };

export type VerifyEmailByTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailByTokenMutation = { __typename?: 'Mutation', VerifyEmailByToken: { __typename?: 'VerifyEmailResponse', message: string, success: boolean } };

export type FetchedFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchedFiltersQuery = { __typename?: 'Query', fetchReleasesFilters: { __typename?: 'ReleasesFilters', genres: Array<{ __typename?: 'GenreFilterResult', count: number, genres: Array<{ __typename?: 'GenreFilterFields', id: string, russian: string } | null> }>, studios: Array<{ __typename?: 'StudioFilterResult', count: number, studios: Array<{ __typename?: 'StudioFilterFields', id: string, name: string } | null> }> } };

export type AnimeWithFiltersQueryVariables = Exact<{
  filter: AnimeFilterParams;
}>;


export type AnimeWithFiltersQuery = { __typename?: 'Query', animesWithFilter: { __typename?: 'PaginatedAnimeResult', count: number, hasNextPage: boolean, animes?: Array<{ __typename?: 'Anime', id: string, licenseNameRu?: string | null, slug: string, poster?: Array<{ __typename?: 'Poster', id: string, originalUrl: string, previewUrl: string }> | null, genres?: Array<{ __typename?: 'Genre', id: string, russian: string }> | null }> | null } };

export type ItemsQueryVariables = Exact<{
  page: Scalars['Float']['input'];
}>;


export type ItemsQuery = { __typename?: 'Query', allAnimes: { __typename?: 'AllAnimeResponse', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Anime', id: string, name?: string | null, licenseNameRu?: string | null, slug: string, poster?: Array<{ __typename?: 'Poster', id: string, originalUrl: string, previewUrl: string }> | null, genres?: Array<{ __typename?: 'Genre', id: string, russian: string, name: string }> | null }> } };

export type SignInMutationMutationVariables = Exact<{
  args: UserLoginInput;
}>;


export type SignInMutationMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', email: string, password?: string | null, name?: string | null, id: string, role: UsersRoles, emailVerified?: any | null, createdAt: any, currentAvatar?: { __typename?: 'Image', id: string, filename: string, originalName: string, path: string, mimeType: string, size: number, width?: number | null, height?: number | null, type: ImageType, url: string, thumbnailUrl?: string | null, createdAt: any, updatedAt: any, userId: string, blurhash?: string | null } | null } };

export type CreateCommentMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, message: string, createdAt: any, parentId?: string | null, userCanDelete: boolean, userCanUpdate: boolean, animeId: string } };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Comment', id: string, message: string, createdAt: any, parentId?: string | null, userCanDelete: boolean, userCanUpdate: boolean, animeId: string } };

export type UpdateCommentMutationVariables = Exact<{
  message: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'Comment', id: string, message: string, createdAt: any, parentId?: string | null, userCanDelete: boolean, userCanUpdate: boolean, animeId: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, name?: string | null, emailVerified?: any | null, createdAt: any, currentAvatar?: { __typename?: 'Image', id: string, url: string, thumbnailUrl?: string | null, blurhash?: string | null } | null } };

export type LikeCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type LikeCommentMutation = { __typename?: 'Mutation', likeComment: number };


export const DeleteAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteAvatarMutation, DeleteAvatarMutationVariables>;
export const SetNewEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetNewEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNewEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<SetNewEmailMutation, SetNewEmailMutationVariables>;
export const SetNewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetNewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNewPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}}]}]}}]} as unknown as DocumentNode<SetNewPasswordMutation, SetNewPasswordMutationVariables>;
export const ChangeAnimeStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeAnimeStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnimeStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeStatusOfAnime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"animeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}}}]}]}}]} as unknown as DocumentNode<ChangeAnimeStatusMutationMutation, ChangeAnimeStatusMutationMutationVariables>;
export const DeleteAnimeFromWatchingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAnimeFromWatchingList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAnimeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"animeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}}}]}]}}]} as unknown as DocumentNode<DeleteAnimeFromWatchingListMutation, DeleteAnimeFromWatchingListMutationVariables>;
export const OneAnimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OneAnime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userWatchListStatusDistributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"animeLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<OneAnimeQuery, OneAnimeQueryVariables>;
export const GetCommentsByAnimeIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsByAnimeId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommentsByAnimeId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userCanDelete"}},{"kind":"Field","name":{"kind":"Name","value":"userCanUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"isUserLikeComment"}},{"kind":"Field","name":{"kind":"Name","value":"animeId"}},{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsByAnimeIdQuery, GetCommentsByAnimeIdQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const SignupUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SignupUserMutation, SignupUserMutationVariables>;
export const LoginWiaGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginWiaGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginWiaGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<LoginWiaGoogleMutation, LoginWiaGoogleMutationVariables>;
export const VerifyEmailByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmailByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"VerifyEmailByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailByTokenMutation, VerifyEmailByTokenMutationVariables>;
export const FetchedFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchedFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchReleasesFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"studios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchedFiltersQuery, FetchedFiltersQueryVariables>;
export const AnimeWithFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AnimeWithFilters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnimeFilterParams"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animesWithFilter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<AnimeWithFiltersQuery, AnimeWithFiltersQueryVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnimes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"licenseNameRu"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"russian"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;
export const SignInMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signInMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutationMutation, SignInMutationMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"animeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userCanDelete"}},{"kind":"Field","name":{"kind":"Name","value":"userCanUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"animeId"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userCanDelete"}},{"kind":"Field","name":{"kind":"Name","value":"userCanUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"animeId"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const UpdateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userCanDelete"}},{"kind":"Field","name":{"kind":"Name","value":"userCanUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"animeId"}}]}}]}}]} as unknown as DocumentNode<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const LikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<LikeCommentMutation, LikeCommentMutationVariables>;