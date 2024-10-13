import { useState } from 'react';
import { useCommentContext } from '../CommentOptionsProvider';
import { useLikeComment } from '@/app/api/services/comments/LikeComment';
import { CommentOption } from '../../CommentOption/CommentOption';
import { FaHeart } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';

export function LikeOption({ likes, isLiked }: { likes: number; isLiked: boolean }) {
	const { commentId } = useCommentContext();
	const [likesCount, setLikes] = useState(likes);
	const [isLikedState, setIsLiked] = useState(isLiked);
	const onClickHandler = () => {
		mutate(commentId);
		setIsLiked((prev) => !prev);
	};
	const { mutate } = useLikeComment({ functions: (data: number) => setLikes(data) });
	return (
		<CommentOption className="flex" onClick={onClickHandler}>
			<BiHeart
				className={`text-primary transition-colors hover:scale-110 hover:text-red-500 ${isLikedState ? 'text-red-500' : ''}`}
			/>

			{likesCount}
		</CommentOption>
	);
}
