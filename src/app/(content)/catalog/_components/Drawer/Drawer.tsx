'use client';

import { cn } from '@/app/utils';
import { DrawerProvider, useDrawer } from './useDrawer';
import { Button } from '@/app/shared/Button/Button';

const DrawerRoot = ({ children }: { children: React.ReactNode }) => {
	return <DrawerProvider>{children}</DrawerProvider>;
};

const DrawerTrigger = ({ children }: { children: React.ReactNode }) => {
	const { isOpen, setIsOpen } = useDrawer();
	return (
		<div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
			{children}
		</div>
	);
};

const DrawerClose = () => {
	const { setIsOpen } = useDrawer();
	return (
		<div onClick={() => setIsOpen(false)}>
			<Button
				variant="ghost"
				size={'link'}
				className="h-8 w-auto p-4 text-color-text transition-colors duration-300 hover:bg-el-bg-hover dark:hover:bg-el-border dark:hover:text-white"
			>
				<div className="text-xl">{'<'}</div>
				Назад
			</Button>
		</div>
	);
};
const DrawerContent = ({ children }: { children: React.ReactNode }) => {
	const { isOpen } = useDrawer();

	return (
		<div
			className={cn(
				'absolute left-0 top-0 z-[99] w-72 overflow-y-auto rounded p-4',

				'rounded-medium bg-el-bg pl-3 dark:bg-color-el-bg',

				'transition-[transform,opacity] duration-300',

				isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
			)}
		>
			{children}
		</div>
	);
};

const DrawerHeader = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex justify-between">{children}</div>;
};

const DrawerFilterReset = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			variant="destructive"
			className="h-8 bg-el-bg text-center text-error hover:bg-error/30 dark:bg-transparent"
			onClick={onClick}
		>
			сбросить
		</Button>
	);
};
const Drawer = {
	Root: DrawerRoot,
	Trigger: DrawerTrigger,
	Close: DrawerClose,
	Content: DrawerContent,
	Header: DrawerHeader,
	FilterReset: DrawerFilterReset
};
export default Drawer;
