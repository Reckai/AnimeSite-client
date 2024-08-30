import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { Button } from '@/app/shared/Button/Button';

import { CREATE_COMMENT } from '../Mutation';
import { Textarea } from '@/app/shared/TextareaComponent/TextareaComponent';
interface CommentInputProps {
	animeId: string;
	slug: string;
}

export function CommentInput({ animeId, slug }: CommentInputProps) {
	const [comment, setComment] = useState('');
	const { client } = useGraphQLClient();
	const queryClient = useQueryClient();

	const createCommentMutation = useMutation({
		mutationFn: (message: string) => client.request(CREATE_COMMENT, { animeId, message }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`anime-comments`, animeId] });
			setComment('');
		}
	});

	const handleSubmit = () => {
		if (comment.trim()) {
			createCommentMutation.mutate(comment);
		}
	};

	return (
		<div className="w-full space-y-2 sm:w-3/4 md:w-1/2">
			<Textarea
				placeholder="Написать комментарий"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className="w-full"
			/>
			{comment.trim() && (
				<div className="flex justify-end">
					<Button
						onClick={handleSubmit}
						disabled={createCommentMutation.isPending}
						className="h-8 w-full md:w-auto"
					>
						Отправить
					</Button>
				</div>
			)}
		</div>
	);
}
