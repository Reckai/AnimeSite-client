import Image from 'next/image';

import AnimeBG from '../../../../../public/no-bg.GtEBCO-Z.jpg';

function AnimePageLayout({
	children // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <section className="flex min-h-screen flex-col">{children}</section>;
}
export default AnimePageLayout;
