'use client';

import React from 'react';
import {
  useDismiss, useFloating, useInteractions, useTransitionStyles,
} from '@floating-ui/react';
import { VscAccount } from 'react-icons/vsc';
import { CiHeart, CiLogout, CiSettings } from 'react-icons/ci';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarImage } from '@/app/shared/Avatar/AvaterComponent';
import DropDownItem from '@/app/shared/DropDownItem/DropDownItem';

function DropDownMenu({ img }: { img: string | null | undefined }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const { refs, context } = useFloating({
    open: isOpen, onOpenChange: setIsOpen,
  });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
  const { isMounted, styles } = useTransitionStyles(context);
  const OnLogOutClick = () => {
    signOut().then(() => { router.push('/'); });
  };
  return (
    <div>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Avatar>
          <AvatarImage href={img || ''} className="" />
        </Avatar>
      </button>

      {isMounted && (
      <div
        style={{ ...styles }}
        ref={refs.setFloating}
        {...getFloatingProps()}
        className={`absolute   w-40 right-0 z-10 bg-opacity-secondary origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
        transition-opacity ease-in duration-100 p-2`}
      >

        <DropDownItem href="/acoount">
          <VscAccount size={'20px'} />
          Профиль
        </DropDownItem>
        <DropDownItem href="/sdfsdf">
          <CiHeart size={'20px'} />
          Избранные
        </DropDownItem>
        <DropDownItem href="/settings">
          <CiSettings size={'20px'} />
          Настройки
        </DropDownItem>

        <div onClick={OnLogOutClick} className="h-9 pt-[2px] flex cursor-pointer justify-start items-center gap-1.5 px-4 border-color-text text-base font-normal  text-rose-600 hover:bg-rose-600/25     hover:rounded-md ">
          <CiLogout size={'20px'} />
          Выход
        </div>
      </div>
      )}
    </div>
  );
}

export default DropDownMenu;
