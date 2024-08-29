import Image from 'next/image';
import AvatarPlug from '../../../AvatarPlug/AvatarPlug';
import { useSession } from '@/app/context/SessionContext/useSession';

function CommentHeader({ date, name }: { date: string; name?: string; image?: string }) {
	const { session } = useSession();
	return (
		<div className="mb-2 flex items-center">
			{session?.image ? (
				<Image
					src={session.image}
					width={32}
					height={32}
					alt={session.name}
					className="mr-2 h-8 w-8 rounded-full"
				/>
			) : (
				<AvatarPlug className="mr-2 h-8 w-8" name={session?.name || ''} />
			)}
			<span className="font-semibold">{name}</span>
			<span className="ml-2 text-sm text-gray-500">{date}</span>
		</div>
	);
}

export default CommentHeader;
