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
    "\nmutation DeleteAvatar($userId: String!) {\n  DeleteAvatar(userId: $userId)\n}": types.DeleteAvatarDocument,
    "\n  mutation SetNewEmail($newEmail: String!, $password: String!) {\n  setNewEmail(newEmail: $newEmail, password: $password)\n}": types.SetNewEmailDocument,
    "\n    mutation SetNewPassword($newPassword: String!, $oldPassword: String!) {\n  setNewPassword(newPassword: $newPassword, oldPassword: $oldPassword)\n}": types.SetNewPasswordDocument,
    "\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n": types.ChangeAnimeStatusMutationDocument,
    "\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n": types.DeleteAnimeFromWatchingListDocument,
    "\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.OneAnimeDocument,
    "\n\tquery GetCommentsByAnimeId($orderBy: SortOrder, $slug: String!) {\n\t\tgetCommentsByAnimeId(orderBy: $orderBy, slug: $slug) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tisUserLikeComment\n\t\t\tanimeId\n\t\t\tanime {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t\n\t\t\t}\n\t\t\tlikes {\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n": types.GetCommentsByAnimeIdDocument,
    "\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\t\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.MutationDocument,
    "\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n": types.SignupUserDocument,
    "\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\t\n\t\t}\n\t}\n": types.LoginWiaGoogleDocument,
    "\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n": types.VerifyEmailByTokenDocument,
    "\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n": types.ItemsDocument,
    "\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.SignInMutationDocument,
    "\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t\tpassword\n\t\t\tname\n\t\t\tid\n\t\t\trole\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t\tcurrentAvatar {\n\t\t\t\tid\n\t\t\t\tfilename\n\t\t\t\toriginalName\n\t\t\t\tpath\n\t\t\t\tmimeType\n\t\t\t\tsize\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\ttype\n\t\t\t\turl\n\t\t\t\tthumbnailUrl\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tuserId\n\t\t\t\tblurhash\n\t\t\t}\n\t\t}\n\t}\n": types.MeDocument,
    "\n\tmutation CreateComment($animeId: String!, $message: String!, $parentId: String) {\n\t\tcreateComment(animeId: $animeId, message: $message, parentId: $parentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n": types.CreateCommentDocument,
    "\n\tmutation deleteComment($commentId: String!) {\n\t\tdeleteComment(commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n": types.DeleteCommentDocument,
    "\n\tmutation UpdateComment($message: String!, $commentId: String!) {\n\t\tupdateComment(message: $message, commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n": types.UpdateCommentDocument,
    "\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcurrentAvatar {\n      id\n      url\n      thumbnailUrl\n      blurhash\n    }\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n": types.UserDocument,
    "\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n": types.LikeCommentDocument,
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
export function graphql(source: "\nmutation DeleteAvatar($userId: String!) {\n  DeleteAvatar(userId: $userId)\n}"): (typeof documents)["\nmutation DeleteAvatar($userId: String!) {\n  DeleteAvatar(userId: $userId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetNewEmail($newEmail: String!, $password: String!) {\n  setNewEmail(newEmail: $newEmail, password: $password)\n}"): (typeof documents)["\n  mutation SetNewEmail($newEmail: String!, $password: String!) {\n  setNewEmail(newEmail: $newEmail, password: $password)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SetNewPassword($newPassword: String!, $oldPassword: String!) {\n  setNewPassword(newPassword: $newPassword, oldPassword: $oldPassword)\n}"): (typeof documents)["\n    mutation SetNewPassword($newPassword: String!, $oldPassword: String!) {\n  setNewPassword(newPassword: $newPassword, oldPassword: $oldPassword)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n"): (typeof documents)["\n\tmutation changeAnimeStatusMutation($status: AnimeStatus!, $animeId: String!) {\n\t\tchangeStatusOfAnime(status: $status, animeId: $animeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n"): (typeof documents)["\n\tmutation deleteAnimeFromWatchingList($animeId: String!) {\n\t\tdeleteAnimeStatus(animeId: $animeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OneAnime($slug: String!) {\n\t\tanime(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tlicenseNameRu\n\t\t\tdescription\n\t\t\tgenres {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\trussian\n\t\t\t}\n\t\t\tposter {\n\t\t\t\toriginalUrl\n\t\t\t\tid\n\t\t\t\tpreviewUrl\n\t\t\t}\n\n\t\t\tuserWatchListStatusDistributions {\n\t\t\t\tstatus\n\t\t\t\tcount\n\t\t\t}\n\t\t\tanimeLists {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t}\n\t\t\tstudios {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetCommentsByAnimeId($orderBy: SortOrder, $slug: String!) {\n\t\tgetCommentsByAnimeId(orderBy: $orderBy, slug: $slug) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tisUserLikeComment\n\t\t\tanimeId\n\t\t\tanime {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t\n\t\t\t}\n\t\t\tlikes {\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCommentsByAnimeId($orderBy: SortOrder, $slug: String!) {\n\t\tgetCommentsByAnimeId(orderBy: $orderBy, slug: $slug) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tisUserLikeComment\n\t\t\tanimeId\n\t\t\tanime {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t\n\t\t\t}\n\t\t\tlikes {\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\t\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation Mutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\t\n\t\t\t\trole\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n"): (typeof documents)["\n\tmutation SignupUser($password: String!, $email: String!) {\n\t\tsignupUser(password: $password, email: $email)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\t\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LoginWiaGoogle($token: String!) {\n\t\tloginWiaGoogle(token: $token) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcreatedAt\n\t\t\t\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation VerifyEmailByToken($token: String!) {\n\t\tVerifyEmailByToken(token: $token) {\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Items($page: Float!) {\n\t\tallAnimes(page: $page) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlicenseNameRu\n\t\t\t\tslug\n\t\t\t\tposter {\n\t\t\t\t\tid\n\t\t\t\t\toriginalUrl\n\t\t\t\t\tpreviewUrl\n\t\t\t\t}\n\t\t\t\tgenres {\n\t\t\t\t\tid\n\t\t\t\t\trussian\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttotalCount\n\t\t\thasNextPage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation signInMutation($args: UserLoginInput!) {\n\t\tloginUser(args: $args) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t\tpassword\n\t\t\tname\n\t\t\tid\n\t\t\trole\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t\tcurrentAvatar {\n\t\t\t\tid\n\t\t\t\tfilename\n\t\t\t\toriginalName\n\t\t\t\tpath\n\t\t\t\tmimeType\n\t\t\t\tsize\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\ttype\n\t\t\t\turl\n\t\t\t\tthumbnailUrl\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tuserId\n\t\t\t\tblurhash\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t\tpassword\n\t\t\tname\n\t\t\tid\n\t\t\trole\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t\tcurrentAvatar {\n\t\t\t\tid\n\t\t\t\tfilename\n\t\t\t\toriginalName\n\t\t\t\tpath\n\t\t\t\tmimeType\n\t\t\t\tsize\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\ttype\n\t\t\t\turl\n\t\t\t\tthumbnailUrl\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tuserId\n\t\t\t\tblurhash\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateComment($animeId: String!, $message: String!, $parentId: String) {\n\t\tcreateComment(animeId: $animeId, message: $message, parentId: $parentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateComment($animeId: String!, $message: String!, $parentId: String) {\n\t\tcreateComment(animeId: $animeId, message: $message, parentId: $parentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteComment($commentId: String!) {\n\t\tdeleteComment(commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteComment($commentId: String!) {\n\t\tdeleteComment(commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateComment($message: String!, $commentId: String!) {\n\t\tupdateComment(message: $message, commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateComment($message: String!, $commentId: String!) {\n\t\tupdateComment(message: $message, commentId: $commentId) {\n\t\t\tid\n\t\t\tmessage\n\t\t\tcreatedAt\n\t\t\tparentId\n\t\t\tuserCanDelete\n\t\t\tuserCanUpdate\n\t\t\tanimeId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcurrentAvatar {\n      id\n      url\n      thumbnailUrl\n      blurhash\n    }\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery User {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tcurrentAvatar {\n      id\n      url\n      thumbnailUrl\n      blurhash\n    }\n\t\t\temailVerified\n\t\t\tcreatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n"): (typeof documents)["\n\tmutation LikeComment($commentId: String!) {\n\t\tlikeComment(commentId: $commentId)\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;