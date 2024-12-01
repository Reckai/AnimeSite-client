import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import React from 'react';
import Header from '@/app/_Components/Header/Header';

import Provider from '@/app/_providers/providers';
import { cn } from './utils';
import { Footer } from './_Components/Footer/FooterCompoent';
import { Toaster } from 'sonner';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});
const TOASTER_DURATION = 5000;
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
					`font-sans font-[62.5%] text-black dark:bg-bg-color dark:text-white`,
					fontSans.className,
					fontSans.variable
				)}
			>
				<Provider>
					<Header />
					{children}
				</Provider>

				<Footer />
				<div id="modal-container" />
				<Toaster duration={TOASTER_DURATION} />
			</body>
		</html>
	);
}
