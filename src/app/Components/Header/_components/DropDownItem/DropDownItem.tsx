import React from 'react';
import Link from "next/link";

function DropDownItem({ children, href  }:{ children: React.ReactNode, href:string }) {
  return (
    <Link href={href} className={`h-9 pt-[2px] flex  justify-start items-center gap-1.5 px-4 border-color-text text-base font-normal  bg-secondary text-color-text-accent hover:bg-secondary/50p-2   hover:text-white  hover:bg-form-color hover:rounded-md `}>
        {children}
    </Link>
  );
}

export default DropDownItem;
