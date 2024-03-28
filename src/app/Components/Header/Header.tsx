'use client';

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import Button from '@/app/Components/Button/Button';
import { Avatar, AvatarImage } from '@/app/shared/Avatar/AvaterComponent';
import DropDownMenu from "@/app/Components/Header/_components/DropDownMenu/DropDownMenu";

type HeaderProp ={
    styles?: string | undefined;
}
function Header({ styles = '' }: HeaderProp) {
  const session = useSession();

  return (
    <header
      className={`header   items-center  absolute left-0 top-0 z-20 ${styles || 'bg-header'}  w-full p-4 text-2xl h-14 w-100% text-black dark:text-white
 `}
    >
      <div className="relative items-center flex  h-full justify-between">
        <nav className="font-sans font-medium ">
          <h1>
            <Link href="/">
              K.a.t.r.o
            </Link>
          </h1>
        </nav>

        <nav>
          {session.data
            ? (
                  <DropDownMenu img={session.data.user?.image}/>
            )
            : (
              <Button  type="button" variant={'primary'}>
                <Link href={'/auth/signin'}>
                    Войти
                </Link>
              </Button>
            )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
