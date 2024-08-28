'use client';

import React from 'react';
import Link from 'next/link';

import { ThemeToggle } from '@/app/shared/ThemeToogle/ThemeToggle';

import { Button } from '../../shared/Button/Button';
import DropDownMenu from './_components/DropDownMenu/DropDownMenu';
import { useSession } from '@/app/context/SessionContext/useSession';

type HeaderProp = {
	styles?: string | undefined;
};
function Header({ styles = '' }: HeaderProp) {
	const { session } = useSession();

	return (
		<header
			className={`header fixed left-0 top-0 z-20 bg-slate-100 ${styles} w-full text-black dark:border-none dark:bg-header dark:text-white`}
		>
			<div className="relative mx-auto flex h-14 w-full max-w-[1532px] items-center justify-between px-2">
				<nav className="font-sans text-2xl font-medium text-color-text dark:text-white">
					<Link href="/">K.a.t.r.o</Link>
				</nav>

				<nav className="flex gap-4">
					<ThemeToggle />
					{session ? (
						<DropDownMenu img={session?.image} name={session.name} id={session.id} />
					) : (
						<Button>
							<Link href="/auth">Войти</Link>
						</Button>
					)}
				</nav>
			</div>
		</header>
	);
}

export default Header;
