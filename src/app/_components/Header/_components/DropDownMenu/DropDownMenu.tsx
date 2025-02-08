'use client';

import React from 'react';
import { useDismiss, useFloating, useInteractions, useTransitionStyles } from '@floating-ui/react';
import { VscAccount } from 'react-icons/vsc';
import { CiHeart, CiLogout, CiSettings } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import DropDownItem from '@/app/_Components/Header/_components/DropDownItem/DropDownItem';

import { useSession } from '@/app/context/SessionContext/useSession';
import { Logout } from './logout';
import { flushSync } from 'react-dom';
import { googleLogout } from '@react-oauth/google';
import AvatarPlug from '@/app/shared/AvatarPlug/AvatarPlug';
import AvatarHOC from '@/app/shared/AvatarHOC/AvatarHOC';

interface DropDownProps {
	img: string | null | undefined;
	name: string;
	id: string;
}

function DropDownMenu({ img, name, id }: DropDownProps) {
	const router = useRouter();
	const { setSession } = useSession();
	const [isOpen, setIsOpen] = React.useState(false);

	// Memoize the avatar component to prevent unnecessary rerenders
	const avatar = React.useMemo(() => {
		if (img) {
			return <AvatarHOC imgURL={img} name={name} className="h-[40px] w-[40px]" />;
		}
		return <AvatarPlug className="h-[40px] w-[40px]" name={name} />;
	}, [img, name]);

	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen
	});
	const dismiss = useDismiss(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
	const { isMounted, styles } = useTransitionStyles(context);

	const OnLogOutClick = () => {
		Logout().then(() => {
			googleLogout();
			flushSync(() => setSession(undefined));
			router.refresh();
		});
	};

	return (
		<div>
			<button
				ref={refs.setReference}
				{...getReferenceProps()}
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				{avatar}
			</button>

			{isMounted && (
				<div
					style={{ ...styles }}
					ref={refs.setFloating}
					{...getFloatingProps()}
					className={`absolute right-0 z-20 w-40 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-100 ease-in focus:outline-none dark:bg-opacity-secondary`}
				>
					<DropDownItem href={`/user/${id}`}>
						<VscAccount size="20px" />
						Профиль
					</DropDownItem>
					<DropDownItem href="/sdfsdf">
						<CiHeart size="20px" />
						Избранные
					</DropDownItem>
					<DropDownItem href="/settings">
						<CiSettings size="20px" />
						Настройки
					</DropDownItem>

					<div
						onClick={OnLogOutClick}
						className="flex h-9 cursor-pointer items-center justify-start gap-1.5 border-color-text px-4 pt-[2px] text-base font-normal text-rose-600 duration-150 hover:rounded-md hover:bg-rose-600/25"
					>
						<CiLogout size="20px" />
						Выход
					</div>
				</div>
			)}
		</div>
	);
}

export default DropDownMenu;
