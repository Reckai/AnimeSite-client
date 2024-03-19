import React from 'react';
import Image from 'next/image';
export function Avatar({ children }:React.PropsWithChildren) {
  return (
    <div

      className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full "
    >
      {children}
    </div>
  );
}
Avatar.displayName = 'Avatar';

export function AvatarImage({ href, className }:{href:string, className:string}) {
  return (
    <Image
      src={href}
      width={40}
      height={40}
      alt="avatar"
      className={`aspect-square h-full w-full ${className}`}
    />
  );
}
