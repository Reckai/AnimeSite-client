import React from 'react';
import UserInfo from './_components/userInfo/UserInfo';
import Banner from '../../_components/Banner';
import AvatarComponent from './_components/userAvatar/AvatarComponent';

async function Page() {
	return (
		<>
			<Banner />

			<section className="lg:pt-76 relative z-10 mx-auto max-w-[1532px] px-5 pt-56 sm:pt-60 md:pt-80">
				<div className="flex gap-8">
					<section className="mt-[-75px] h-32 w-32">
						<div className="relative h-full w-full overflow-hidden rounded-full">
							<AvatarComponent />
						</div>
					</section>
					<UserInfo />
				</div>
			</section>
		</>
	);
}

export default Page;
