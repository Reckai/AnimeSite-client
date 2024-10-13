import React from 'react';
import CommentComponent from '@/app/shared/CommentSection/Comment/Comment';
import { Comment } from '@/gql/graphql';
interface CommentListProps {
	comments: Comment[];
	getCommentsByParentId: (parentId: string | null) => Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments, getCommentsByParentId }) => {
	return (
		<div className="space-y-4">
			{comments.map((comment) => (
				<CommentComponent
					key={comment.id}
					comment={comment}
					getCommentsByParentId={getCommentsByParentId}
				/>
			))}
		</div>
	);
};

export default CommentList;
