import { CommentOption } from '../../CommentOption/CommentOption';
import { BiChat } from 'react-icons/bi';

interface ReplyOption {
	onClick: () => void;
}

export function ReplyOption({ onClick }: ReplyOption) {
	return (
		<CommentOption onClick={onClick} aria-label="Reply">
			<BiChat className="text-primary transition-colors hover:scale-110 hover:text-lime-600" />
		</CommentOption>
	);
}
