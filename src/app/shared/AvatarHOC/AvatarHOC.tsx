'use client';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import AvatarPlug from '../AvatarPlug/AvatarPlug';
import { cn } from '@/app/utils';

interface AvatarHOCProps extends React.HTMLAttributes<HTMLDivElement> {
	imgURL: string | null | undefined;
	name: string;
}

const AvatarHOC: React.FC<AvatarHOCProps> = ({ imgURL, name, className }) => {
	return (
		<>
			{imgURL ? (
				<Avatar
					className={cn('relative overflow-hidden rounded-full', className)}
					alt="avatar"
					width="400"
					height="400"
					src={imgURL as string}
				/>
			) : (
				<AvatarPlug className="text-4xl" name={name} />
			)}
		</>
	);
};

export default AvatarHOC;
