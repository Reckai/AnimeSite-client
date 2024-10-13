import { FaPencilAlt } from 'react-icons/fa';
import { CommentOption } from '../../CommentOption/CommentOption';
import { useState } from 'react';
import { BiPencil } from 'react-icons/bi';

interface EditOption {
	onClick: () => void;
	clicked: boolean;
}

export function EditOption({ onClick, clicked }: EditOption) {
	const onClickFunction = () => {
		onClick();
	};
	return (
		<CommentOption>
			<FaPencilAlt
				onClick={onClickFunction}
				className={`text-primary transition-colors ${clicked ? 'text-yellow-500' : ''} hover:scale-110 hover:text-yellow-500`}
			/>
		</CommentOption>
	);
}
