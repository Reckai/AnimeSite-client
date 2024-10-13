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
	'\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n':
		types.ChangeAnimeStatusMutationDocument,
	'\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n':
		types.DeleteAnimeFromWatchingListDocument,
	'\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n':
		types.OneAnimeDocument,
	'\nquery GetCommentsByAnimeId( $orderBy: SortOrder, $slug: String!) {\n  getCommentsByAnimeId( orderBy: $orderBy, slug: $slug) {\n\tid\n\tmessage\n\tcreatedAt\n\tparentId\n\tuserCanDelete\n    userCanUpdate\n\tisUserLikeComment\n\tanimeId\n\tanime{\n\t\tslug\n\t}\n    user {\n      id\n      name\n\t  image\n\t}\n\tlikes{\n\tuserId\n\t}\n\t}\n}\n':
		types.GetCommentsByAnimeIdDocument,
	'\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n':
		types.MutationDocument,
	'\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n':
		types.SignupUserDocument,
	'\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\timage\n\t\t}\n\t}\n':
		types.LoginWiaGoogleDocument,
	'\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n':
		types.VerifyEmailByTokenDocument,
	'\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n':
		types.ItemsDocument,
	'\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n':
		types.SignInMutationDocument,
	'\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\trole\n\t\t\tcreatedAt\n\t\t}\n\t}\n':
		types.MeDocument,
	'mutation CreateComment($animeId: String!, $message: String!,$parentId: String) {\n    createComment(animeId: $animeId, message: $message, parentId: $parentId) {\n      id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }':
		types.CreateCommentDocument,
	'mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId){\n        id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }':
		types.DeleteCommentDocument,
	'\n    mutation UpdateComment($message: String!, $commentId: String!) {\n  updateComment(message: $message, commentId: $commentId) {\n  id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n    userCanUpdate       \n                  animeId  \n    }}':
		types.UpdateCommentDocument,
	'\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n':
		types.UserDocument,
	'\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n':
		types.LikeCommentDocument
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
export function graphql(
	source: '\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n'
): (typeof documents)['\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n'
): (typeof documents)['\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\nquery GetCommentsByAnimeId( $orderBy: SortOrder, $slug: String!) {\n  getCommentsByAnimeId( orderBy: $orderBy, slug: $slug) {\n\tid\n\tmessage\n\tcreatedAt\n\tparentId\n\tuserCanDelete\n    userCanUpdate\n\tisUserLikeComment\n\tanimeId\n\tanime{\n\t\tslug\n\t}\n    user {\n      id\n      name\n\t  image\n\t}\n\tlikes{\n\tuserId\n\t}\n\t}\n}\n'
): (typeof documents)['\nquery GetCommentsByAnimeId( $orderBy: SortOrder, $slug: String!) {\n  getCommentsByAnimeId( orderBy: $orderBy, slug: $slug) {\n\tid\n\tmessage\n\tcreatedAt\n\tparentId\n\tuserCanDelete\n    userCanUpdate\n\tisUserLikeComment\n\tanimeId\n\tanime{\n\t\tslug\n\t}\n    user {\n      id\n      name\n\t  image\n\t}\n\tlikes{\n\tuserId\n\t}\n\t}\n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n'
): (typeof documents)['\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\timage\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\timage\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\trole\n\t\t\tcreatedAt\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\trole\n\t\t\tcreatedAt\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'mutation CreateComment($animeId: String!, $message: String!,$parentId: String) {\n    createComment(animeId: $animeId, message: $message, parentId: $parentId) {\n      id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }'
): (typeof documents)['mutation CreateComment($animeId: String!, $message: String!,$parentId: String) {\n    createComment(animeId: $animeId, message: $message, parentId: $parentId) {\n      id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId){\n        id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }'
): (typeof documents)['mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId){\n        id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n                  userCanUpdate\n                  animeId\n    }\n  }'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n    mutation UpdateComment($message: String!, $commentId: String!) {\n  updateComment(message: $message, commentId: $commentId) {\n  id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n    userCanUpdate       \n                  animeId  \n    }}'
): (typeof documents)['\n    mutation UpdateComment($message: String!, $commentId: String!) {\n  updateComment(message: $message, commentId: $commentId) {\n  id\n                  message\n                  createdAt\n                  parentId\n                  userCanDelete\n    userCanUpdate       \n                  animeId  \n    }}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\timage\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n'
): (typeof documents)['\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
