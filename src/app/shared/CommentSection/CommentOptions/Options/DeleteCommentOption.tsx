import { BiTrash } from 'react-icons/bi';
import { CommentOption } from '../../CommentOption/CommentOption';
import { FaTrash } from 'react-icons/fa';

export function DeleteCommentOption() {
	return (
		<CommentOption>
			<BiTrash className={`text-red-500 transition-colors hover:scale-110`} />
		</CommentOption>
	);
}
