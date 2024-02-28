'use client'
import React from 'react';
import Link from "next/link";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_DATA, REFRESH_TOKEN } from '@/app/api/routes/Mutations/Mutations';
import Button from '../Button/Button';
type HeaderProp ={
    styles?: string
}
const Header = ({styles}: HeaderProp) => {
    
    

    return (<header
            className={`header   items-center  absolute left-0 top-0 z-20 ${styles ? styles : "bg-header"}  w-full p-4 text-2xl h-14 w-100% text-black dark:text-white
 `}>
        <div className={'relative items-center flex  h-full justify-between'}>
            <nav className="font-sans font-medium ">
                <h1>
                    <Link href={'/'}>
                        K.a.t.r.o
                    </Link>
                </h1>
            </nav>
            <nav>
                
            </nav>
        </div>
    </header>);
};

export default Header;
