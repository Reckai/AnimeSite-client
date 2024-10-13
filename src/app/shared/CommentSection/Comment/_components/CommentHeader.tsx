import Image from 'next/image';
import AvatarPlug from '../../../AvatarPlug/AvatarPlug';

function CommentHeader({ date, name, image }: { date: string; name?: string; image?: string }) {
	return (
		<div className="mb-2 flex items-center">
			{image ? (
				<Image
					src={image}
					width={32}
					height={32}
					alt={name || 'user avatar'}
					className="mr-2 h-8 min-h-8 w-8 min-w-8 rounded-full"
				/>
			) : (
				<AvatarPlug className="mr-2 h-8 w-8" name={name || 'user'} />
			)}
			<span className="font-semibold text-color-text">{name}</span>
			<span className="ml-2 text-sm text-gray-500">{date}</span>
		</div>
	);
}

export default CommentHeader;
