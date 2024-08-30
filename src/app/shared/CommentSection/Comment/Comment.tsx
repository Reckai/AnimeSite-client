import { useState, useRef } from 'react';
import { format, parseISO } from 'date-fns';
import { Comment } from '@/gql/graphql';
import { useSession } from '@/app/context/SessionContext/useSession';
import { cn } from '@/app/utils';
import { Button } from '../../Button/Button';
import CommentHeader from './_components/CommentHeader';

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

	const toggleChildComments = () => setAreChildrenHidden(!areChildrenHidden);

	return (
		<article className="mb-4">
			<CommentHeader
				date={formattedDate}
				name={comment.user?.name || ''}
				image={comment.user?.image || undefined}
			/>
			<p className="mb-2 text-color-text-accent">{comment.message}</p>
			<ChildComments
				childComments={childComments}
				getCommentsByParentId={getCommentsByParentId}
				isHidden={areChildrenHidden}
				onToggle={toggleChildComments}
			/>
		</article>
	);
}
export default CommentComponent;
