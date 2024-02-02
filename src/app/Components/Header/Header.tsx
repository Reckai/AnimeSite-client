import React from 'react';
import Link from "next/link";
type HeaderProp ={
    styles?: string
}
const Header = ({styles}: HeaderProp) => {
    return (<header
            className={`header z-20  absolute left-0 top-0 z-20 ${styles ? styles : "bg-header-bg"}  w-full p-4 text-2xl h-14 w-100% text-black dark:text-white
 `}>
        <div className={'relative items-center flex  justify-between'}>
            <nav className="font-sans font-medium ">
                <h1>
                    <Link href={'/'}>
                        K.a.t.r.o
                    </Link>
                </h1>
            </nav>
            <nav>
                <Link href='/signin'>
                    <p>
                        Вход
                    </p>
                </Link>
            </nav>
        </div>
    </header>);
};

export default Header;
