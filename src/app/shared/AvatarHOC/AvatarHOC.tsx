'use client';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import AvatarPlug from '../AvatarPlug/AvatarPlug';
import { cn } from '@/app/utils';
import { formatBackendImageLinks } from '@/utils/formatBackenImageLinks';

interface AvatarHOCProps extends React.HTMLAttributes<HTMLDivElement> {
	imgURL: string | null | undefined;
	name: string;
}

const AvatarHOC: React.FC<AvatarHOCProps> = ({ imgURL, name, className }) => {
	return (
		<div className={cn('avatar-wrapper', className)}>
			{imgURL ? (
				<Avatar
					className="avatar-wrapper__img"
					alt="avatar"
					width="400"
					quality={100}
					height="400"
					src={formatBackendImageLinks(imgURL)}
				/>
			) : (
				<AvatarPlug className="text-4xl" name={name} />
			)}
		</div>
	);
};

export default AvatarHOC;
