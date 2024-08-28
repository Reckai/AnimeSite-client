import React from 'react';
import Link from 'next/link';

function DropDownItem({ children, href }: { children: React.ReactNode; href: string }) {
	return (
		<Link
			href={href}
			className={`flex h-9 items-center justify-start gap-1.5 border-color-text px-4 pt-[2px] text-base font-normal text-form-color hover:rounded-md hover:bg-slate-500/20 dark:bg-secondary dark:text-color-text-accent dark:hover:bg-form-color dark:hover:bg-secondary/50 dark:hover:text-white`}
		>
			{children}
		</Link>
	);
}

export default DropDownItem;
