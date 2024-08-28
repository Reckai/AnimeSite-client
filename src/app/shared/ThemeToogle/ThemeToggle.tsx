'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';
import { Button } from '../Button/Button';
import { cn } from '@/app/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const ThemeToggle = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, type, ...props }, ref) => {
		const { setTheme, resolvedTheme } = useTheme();
		const [mounted, setMounted] = useState(false);

		useEffect(() => setMounted(true), []);
		if (!mounted)
			return (
				<Button className={'border-0 hover:bg-slate-900/10'} variant={'outline'} size={'icon'}>
					<LuSun
						className={cn(
							'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
						)}
					/>
				</Button>
			);
		return (
			<Button
				className={
					'border-0 transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-slate-900/10 dark:hover:bg-white/10'
				}
				variant={'outline'}
				size={'icon'}
				onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			>
				{resolvedTheme === 'dark' ? (
					<LuSun
						className={cn(
							'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
						)}
					/>
				) : (
					<LuMoon />
				)}
			</Button>
		);
	}
);

ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };
