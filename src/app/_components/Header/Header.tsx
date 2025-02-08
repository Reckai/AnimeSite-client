'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/app/shared/ThemeToogle/ThemeToggle';
import { Button } from '../../shared/Button/Button';
import DropDownMenu from './_components/DropDownMenu/DropDownMenu';
import { useSession } from '@/app/context/SessionContext/useSession';

interface HeaderProps {
	className?: string;
}

function Header({ className = '' }: HeaderProps) {
	const { session } = useSession();

	const linkHoverClasses =
		'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full dark:after:bg-white';

	return (
		<header
			className={`fixed left-0 top-0 z-[102] w-full text-black dark:border-none dark:bg-header dark:text-white ${className}`}
		>
			<div className="relative mx-auto flex h-14 w-full max-w-[1532px] items-center justify-between px-4 sm:px-6">
				<nav className="font-sans text-xl font-medium text-color-text sm:text-2xl dark:text-white">
					<Link href="/" className={linkHoverClasses}>
						K.a.t.r.o
					</Link>
				</nav>

				<nav className="flex items-center gap-2 sm:gap-4">
					<Link href="/catalog">
						<Button
							variant="ghost"
							className={`${linkHoverClasses} dark:hover:text-gradient-color-from/90`}
						>
							Catalog
						</Button>
					</Link>
					<ThemeToggle />

					{session ? (
						<DropDownMenu img={session.image} name={session.name} id={session.id} />
					) : (
						<Button variant="default">
							<Link href="/auth">Войти</Link>
						</Button>
					)}
				</nav>
			</div>
		</header>
	);
}

export default Header;
