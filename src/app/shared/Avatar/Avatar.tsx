'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/app/utils';

type AvatarProps = Omit<ImageProps, 'src'> & {
	src?: string;
};

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
	({ className, width, height, src, alt, ...props }, ref) => {
		return (
			<div>
				<Image
					ref={ref}
					className={cn('', className)}
					src={src || '/default-avatar.png'}
					alt={alt || 'User avatar'}
					width={width}
					height={height}
					{...props}
				/>
			</div>
		);
	}
);

Avatar.displayName = 'Avatar';

export default Avatar;
