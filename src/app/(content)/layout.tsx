import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-28 flex min-h-screen flex-col">
			<div className="mx-auto mt-24 w-full max-w-[1532px] px-5">{children}</div>
		</div>
	);
}

export default Layout;
