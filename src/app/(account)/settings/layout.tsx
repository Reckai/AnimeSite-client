import React from 'react';
import { IoArrowUndoOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '@/app/shared/Button/Button';
import { cn } from '@/app/utils';
import NavLinks from './nav-links';

function SettingsPageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-7 mt-20 flex flex-col md:flex-none">
			<header className="w-full">
				<h1 className="text-xl font-medium">Редактирование профиля</h1>
				<Link href="/account">
					<Button className={cn('gap-1.5')} variant="primaryLink">
						<IoArrowUndoOutline className={cn('h-[1.2rem] w-[1.2rem]')} />
						Вернутся в профиль
					</Button>
				</Link>
			</header>
			<div className="mt-10 md:flex">
				{/* <div className="mr-20 flex w-1/6 flex-col">
					<Button variant="secondary" size="sm">
						Основное
					</Button>
					<Link href={'/settings/account'}>
						<Button variant="secondary" size="sm">
							Аккаунт
						</Button>
					</Link>
				</div> */}
				<NavLinks />
				<article className="w-full md:w-5/6">{children}</article>
			</div>
		</div>
	);
}

export default SettingsPageLayout;
