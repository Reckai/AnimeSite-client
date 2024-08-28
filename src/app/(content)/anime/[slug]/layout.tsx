import Image from 'next/image';

import AnimeBG from '../../../../../public/no-bg.GtEBCO-Z.jpg';

function AnimePageLayout({
	children // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex min-h-screen flex-col">
			<div className="after:content-[' '] absolute left-0 top-0 h-[512px] w-full after:absolute after:left-0 after:top-0 after:h-[512px] after:w-full after:bg-[#f6f6f6]/80 dark:after:bg-bg-color/80">
				<Image className="h-full w-full object-cover" alt="Background Img" src={AnimeBG} />
				<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-transparent to-[#f6f6f6] dark:to-bg-color/80" />
			</div>
			{children}
		</section>
	);
}
export default AnimePageLayout;
