"use client";

import React from "react";
import Link from "next/link";

import { ThemeToggle } from "@/app/shared/ThemeToogle/ThemeToggle";

import { Button } from "../Button/Button";
import DropDownMenu from "./_components/DropDownMenu/DropDownMenu";
import { useSession } from "@/app/context/SessionContext/useSession";

type HeaderProp = {
  styles?: string | undefined;
};
function Header({ styles = "" }: HeaderProp) {
  const { session } = useSession();

  return (
    <header
      className={`header   items-center  absolute left-0 top-0 z-20 ${styles} dark:bg-header border-b-2 border-color-text-accent dark:border-none w-full p-4 text-2xl h-14 w-100% text-black dark:text-white
 `}
    >
      <div className="relative items-center flex  h-full justify-between">
        <nav className="font-sans font-medium ">
          <h1>
            <Link href="/">K.a.t.r.o</Link>
          </h1>
        </nav>

        <nav className="flex gap-4">
          <ThemeToggle />
          {session ? (
            <DropDownMenu
              img={
                "https://i.pinimg.com/564x/fb/fb/38/fbfb389b651935e0f02c45680737f8a7.jpg"
              }
            />
          ) : (
            <Button>
              <Link href="/auth">Войти</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
