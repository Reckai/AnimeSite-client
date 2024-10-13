import { BiTrash } from 'react-icons/bi';
import { CommentOption } from '../../CommentOption/CommentOption';

interface DeleteCommentOption extends React.HTMLAttributes<HTMLLIElement> {}

export function DeleteCommentOption(props: DeleteCommentOption) {
	return (
		<CommentOption onClick={props.onClick}>
			<BiTrash className={`text-red-500 transition-colors hover:scale-110`} />
		</CommentOption>
	);
}
