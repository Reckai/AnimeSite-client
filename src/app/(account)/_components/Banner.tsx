'use client';
import React from 'react';
import Image from 'next/image';
import AnimeBG from '@/../public/no-bg.GtEBCO-Z.jpg';
import bg from '@/../public/bg.jpg';
function Banner() {
	return (
		<div className="absolute left-0 top-14 h-32 w-full after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#0006] after:content-[''] sm:h-48 md:h-60">
			<Image
				className="h-full w-full object-cover object-center"
				fill
				alt="Background Img"
				src={bg || AnimeBG}
			/>
		</div>
	);
}

export default Banner;
