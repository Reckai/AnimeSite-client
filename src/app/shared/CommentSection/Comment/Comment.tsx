import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AvatarPlug from '@/app/shared/AvatarPlug/AvatarPlug';
import { useCommentsByParentId } from '../helpers/useCommentsByParrentId';
import Image from 'next/image';
import { Comment } from '@/gql/graphql';
import { useSession } from '@/app/context/SessionContext/useSession';
import { format, parseISO } from 'date-fns';
interface CommentProps {
	comment: Comment;
	getCommentsByParentId: (parentId: string | null) => Comment[];
}

const dateFormat = new Intl.DateTimeFormat(undefined, {
	dateStyle: 'medium',
	timeStyle: 'short'
});

function CommentComponent({ comment, getCommentsByParentId }: CommentProps) {
	const { session } = useSession();
	const formattedDate = format(parseISO(comment.createdAt), 'dd MMM yyyy, HH:mm');
	const childComments = getCommentsByParentId(comment.id);
	console.log(childComments);
	return (
		<div className="mb-4">
			<div className="mb-2 flex items-center">
				{session?.image ? (
					<Image
						src={session.image}
						width={32}
						height={32}
						alt={session.name}
						className="mr-2 h-8 w-8 rounded-full"
					/>
				) : (
					<AvatarPlug className="mr-2 h-8 w-8" name={session?.name || ''} />
				)}
				<span className="font-semibold">{session?.name}</span>
				<span className="ml-2 text-sm text-gray-500">{formattedDate}</span>
			</div>
			<p className="mb-2 text-gray-700">{comment.message}</p>
			{childComments.length > 0 && (
				<div className="ml-8">
					{childComments.map((childComment) => (
						<CommentComponent
							key={childComment.id}
							comment={childComment}
							getCommentsByParentId={getCommentsByParentId}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default CommentComponent;
