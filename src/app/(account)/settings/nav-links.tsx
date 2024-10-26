'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ...
const links = [
	{
		name: 'Основное',
		href: '/settings'
	},
	{
		name: 'Аккаунт',
		href: '/settings/account'
	}
];
export default function NavLinks() {
	const pathname = usePathname();

	return (
		<div className="flex flex-col gap-3 md:mr-20">
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:text-color-text dark:hover:bg-secondary/80 dark:hover:text-white',
							{
								'bg-secondary/5 dark:bg-secondary/80': pathname === link.href
							}
						)}
					>
						<p>{link.name}</p>
					</Link>
				);
			})}
		</div>
	);
}
