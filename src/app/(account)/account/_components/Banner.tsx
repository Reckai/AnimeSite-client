import React from 'react';
import Image from 'next/image';
import AnimeBG from '../../../../../public/no-bg.GtEBCO-Z.jpg';

interface BannerProps{
    bannerImg?:string
}
function Banner({ bannerImg }:BannerProps) {
  return (
    <div>
      <div
        className="top-0 left-0  h-[360px] w-full "
      >
        <Image
          className="object-cover  h-full w-full"
          alt="Background Img"
          src={bannerImg || AnimeBG}
        />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-transparent to-[#f6f6f6]  dark:to-bg-color "
        />
      </div>

    </div>
  );
}

export default Banner;
