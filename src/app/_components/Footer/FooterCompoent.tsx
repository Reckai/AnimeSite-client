import { Button } from '@/app/shared/Button/Button';
import React from 'react';
import { BiLogoDiscord } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';

export function Footer() {
	return (
		<footer className="border-t-[1px] border-t-[#23252f] py-6 dark:bg-bg-color dark:text-color-text-accent">
			<div className="container mx-auto px-4">
				<div className="mb-4 flex justify-center space-x-4">
					<a href="https://t.me/seol18" target="_blank">
						<Button className="gap-px text-black dark:text-color-text-accent" variant={'thirdly'}>
							<FaTelegramPlane className="h-4 w-4" />
							Reckai
						</Button>
					</a>
				</div>

				<p className="text-center text-sm">Разработано с любовью ❤️ by Reckai</p>
			</div>
		</footer>
	);
}
