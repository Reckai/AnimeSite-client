import React from 'react';
import Banner from '@/app/(account)/_components/Banner';

function AccountLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Banner />
			{children}
		</div>
	);
}

export default AccountLayout;
