'use client';
import { cn } from '@/app/utils';
import { generateColorFromString } from '@/lib/generateColorFromString';
import React from 'react';

const AvatarPlug = ({ name, className }: { name: string; className?: string }) => {
	const generatedColor = generateColorFromString(name as string);
	const FirstLetter = name.slice(0, 1).toUpperCase();
	return (
		<div
			className={cn(
				'flex h-full w-full items-center justify-center rounded-full bg-slate-300 text-black dark:text-white',
				className
			)}
			style={{ background: generatedColor }}
		>
			{FirstLetter}
		</div>
	);
};

export default AvatarPlug;
