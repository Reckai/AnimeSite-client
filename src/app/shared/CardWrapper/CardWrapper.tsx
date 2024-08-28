import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import CardHeader from '@/app/shared/CardHeader/CardHeader';
import CardFooter from '../CardFooter/CardFooter';
import { Button } from '@/app/shared/Button/Button';

interface CardWrapperProps {
	children: React.ReactNode;
	backButtonText: string;
	backButtonLink: string;
	headerText: string;
}
function CardWrapper({ children, backButtonText, backButtonLink, headerText }: CardWrapperProps) {
	return (
		<div className="flex w-[400px] flex-col gap-4 rounded-md border-2 p-4 shadow-md dark:border-none dark:bg-color-el-bg dark:text-white">
			<CardHeader>{headerText}</CardHeader>
			{children}
			<CardFooter>
				<Button type="button" variant="link" size={'link'}>
					<Link href={backButtonLink}>{backButtonText}</Link>
				</Button>
			</CardFooter>
		</div>
	);
}

export default CardWrapper;
