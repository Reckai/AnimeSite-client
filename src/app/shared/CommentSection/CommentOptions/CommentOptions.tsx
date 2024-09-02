'use client';
import React, { useState } from 'react';
import { CommentOptionsContext, useCommentContext } from './CommentOptionsProvider';
import { cn } from '@/app/utils';
import { CommentOption } from '../CommentOption/CommentOption';
import { FaHeart, FaPencilAlt } from 'react-icons/fa';
import { AiFillWechat } from 'react-icons/ai';
import { useLikeComment } from '../api/services/LikeComment';
import { useMutation } from '@tanstack/react-query';
import { getClientWithAuthorization } from '@/lib/gqlClient';
import { likeComment } from '../api/Mutations';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';

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
CommentOptions.LikeOption = function LikeOption({ likes }: { likes: number }) {
	const { commentId } = useCommentContext();
	const [likesCount, setLikes] = useState(likes);

	const { mutate } = useLikeComment({ functions: (data: number) => setLikes(data) });
	return (
		<CommentOption className="flex" onClick={() => mutate(commentId)}>
			<FaHeart className="text-primary transition-colors hover:scale-110 hover:text-red-500" />
			{likesCount}
		</CommentOption>
	);
};

CommentOptions.ReplyOption = function ReplyOption() {
	return (
		<CommentOption>
			<AiFillWechat className="text-primary transition-colors hover:scale-110 hover:text-white" />
		</CommentOption>
	);
};

CommentOptions.EditOption = function EditOption() {
	return (
		<CommentOption>
			<FaPencilAlt className="text-primary transition-colors hover:scale-110 hover:text-yellow-500" />
		</CommentOption>
	);
};

CommentOptions.displayName = 'CommentOptions';

export default CommentOptions;
