'use client';
import { cn } from '@/app/utils';
import React from 'react';

interface CommentOptionProps extends React.HTMLAttributes<HTMLLIElement> {}
export const CommentOption = React.forwardRef<HTMLLIElement, CommentOptionProps>(
	({ className, children, ...props }, ref) => (
		<li ref={ref} {...props} className={cn('flex cursor-pointer items-center gap-1', className)}>
			{children}
		</li>
	)
);
CommentOption.displayName = 'CommentOption';
