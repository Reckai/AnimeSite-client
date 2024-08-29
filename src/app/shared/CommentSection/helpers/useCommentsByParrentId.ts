import React from "react";
import { Comment } from "@/gql/graphql";
export function useCommentsByParentId(comments: Comment[]) {
    return React.useMemo(() => {
      const commentMap: Record<string, Comment[]> = {};
      comments.forEach((comment) => {
        const parentId = comment.parentId || 'root';
        if (!commentMap[parentId]) {
          commentMap[parentId] = [];
        }
        commentMap[parentId].push(comment);
      });
      return (parentId: string | null) => commentMap[parentId || 'root'] || [];
    }, [comments]);
  }
