'use client';
import React from 'react';
import { CommentOptionsContext } from './CommentOptionsProvider';
import { cn } from '@/app/utils';
import { CommentOption } from '../CommentOption/CommentOption';
import { FaPencilAlt } from 'react-icons/fa';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { LikeOption } from './Options/LikeOption';
import { BiChat } from 'react-icons/bi';
import { ReplyOption } from './Options/ReplyOption';
import { EditOption } from './Options/EditOption';
import { DeleteCommentOption } from './Options/DeleteCommentOption';

interface CommentOptionsProps extends React.HTMLAttributes<HTMLUListElement> {
	commentId: string;
	message: string;
	parentId?: string | null;
}

const CommentOptions = ({
	className,
	children,
	commentId,
	parentId,
	message,
	...props
}: CommentOptionsProps) => {
	const { client } = useGraphQLClient();
	return (
		<CommentOptionsContext.Provider value={{ commentId, parentId, message, client }}>
			<ul className={cn('flex gap-1', className)} {...props}>
				{children}
			</ul>
		</CommentOptionsContext.Provider>
	);
};
CommentOptions.LikeOption = LikeOption;

CommentOptions.ReplyOption = ReplyOption;

CommentOptions.EditOption = EditOption;
CommentOptions.DeleteCommentOption = DeleteCommentOption;
CommentOptions.displayName = 'CommentOptions';

export default CommentOptions;
