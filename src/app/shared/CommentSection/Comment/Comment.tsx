import { useState, useRef } from 'react';
import { format, parseISO } from 'date-fns';
import { Comment } from '@/gql/graphql';
import { cn } from '@/app/utils';
import { Button } from '../../Button/Button';
import CommentHeader from './_components/CommentHeader';
import { useSession } from '@/app/context/SessionContext/useSession';
import { CommentOption } from '../CommentOption/CommentOption';
import CommentOptions from '../CommentOptions/CommentOptions';

interface CommentProps {
	comment: Comment;
	getCommentsByParentId: (parentId: string | null) => Comment[];
}

function ChildComments({
	childComments,
	getCommentsByParentId,
	isHidden,
	onToggle
}: {
	childComments: Comment[];
	getCommentsByParentId: (parentId: string | null) => Comment[];
	isHidden: boolean;
	onToggle: () => void;
}) {
	const childCommentsRef = useRef<HTMLDivElement>(null);
	console.log(isHidden);
	return (
		<>
			<div ref={childCommentsRef} className={cn('ml-6 flex', isHidden && 'hidden')}>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Collapse comments"
					className="collapse-line"
					onClick={onToggle}
				/>
				<div>
					{childComments.map((childComment) => (
						<CommentComponent
							key={childComment.id}
							comment={childComment}
							getCommentsByParentId={getCommentsByParentId}
						/>
					))}
				</div>
			</div>
			{isHidden && childComments.length > 0 && (
				<Button variant="link" className="mt-1" onClick={onToggle}>
					Show Replies ({childComments.length})
				</Button>
			)}
		</>
	);
}

export function CommentComponent({ comment, getCommentsByParentId }: CommentProps) {
	const formattedDate = format(parseISO(comment.createdAt), 'dd MMM yyyy, HH:mm');
	const childComments = getCommentsByParentId(comment.id);
	const [areChildrenHidden, setAreChildrenHidden] = useState(true);
	const { session } = useSession();
	const toggleChildComments = () => setAreChildrenHidden(!areChildrenHidden);
	console.log(Boolean(comment.likes), 'likes');
	return (
		<article className="mb-4">
			<div>
				<div>
					<CommentHeader
						date={formattedDate}
						name={comment.user?.name || ''}
						image={comment.user?.image || undefined}
					/>
					<p className="mb-2 text-color-text-accent">{comment.message}</p>
				</div>
				{session?.id && (
					<CommentOptions
						commentId={comment.id}
						message={comment.message}
						parentId={comment.id || null}
					>
						<CommentOptions.LikeOption likes={Boolean(comment.likes) ? comment.likes.length : 0} />
						<CommentOptions.ReplyOption />
						{session?.id === comment.user.id && <CommentOptions.EditOption />}
					</CommentOptions>
				)}
			</div>
			<div>
				<ChildComments
					childComments={childComments}
					getCommentsByParentId={getCommentsByParentId}
					isHidden={areChildrenHidden}
					onToggle={toggleChildComments}
				/>
			</div>
		</article>
	);
}
export default CommentComponent;
