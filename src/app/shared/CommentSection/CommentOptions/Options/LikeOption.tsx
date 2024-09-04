import { useState } from 'react';
import { useCommentContext } from '../CommentOptionsProvider';
import { useLikeComment } from '@/app/api/services/comments/LikeComment';
import { CommentOption } from '../../CommentOption/CommentOption';
import { FaHeart } from 'react-icons/fa';

export function LikeOption({ likes }: { likes: number }) {
	const { commentId } = useCommentContext();
	const [likesCount, setLikes] = useState(likes);

	const { mutate } = useLikeComment({ functions: (data: number) => setLikes(data) });
	return (
		<CommentOption className="flex" onClick={() => mutate(commentId)}>
			<FaHeart className="text-primary transition-colors hover:scale-110 hover:text-red-500" />
			{likesCount}
		</CommentOption>
	);
}
