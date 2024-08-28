import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import React from 'react';
import Header from '@/app/_Components/Header/Header';

import Provider from '@/app/_providers/providers';
import { cn } from './utils';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

export const metadata: Metadata = {
	title: 'Anime Page',
	description: 'made by @Reckai'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</head>
			<body
				className={cn(
					`bg-[#f6f6f6] font-sans font-[62.5%] text-black dark:bg-bg-color dark:text-white`,
					fontSans.className,
					fontSans.variable
				)}
			>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
