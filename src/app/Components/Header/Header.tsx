import React from 'react';
import Link from "next/link";

const Header = () => {
    return (<header
            className="header flex justify-between p-4 items-center text-2xl h-14 w-100% text-black dark:text-white
 dark:bg-gradient-to-r dark:to-gradient-color-via  via-gradient-color-via-2 from-gradien-color-to border-b-2  dark:border-b-0 ">
            <nav className="font-sans font-medium ">
                <h1>
                    <Link href={'/'}>
                        K.a.t.r.o
                    </Link>
                </h1>
            </nav>
            <nav>
            <Link href ='/signin'>
               <p>
                   Вход
               </p>
            </Link>
            </nav>
        </header>);
};

export default Header;
