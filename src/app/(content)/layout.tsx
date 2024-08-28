import React from 'react';
import { Toaster } from 'sonner';
const TOASTER_DURATION = 5000;
function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto mt-24 w-full max-w-[1532px] px-5">
				{children}
				<Toaster duration={TOASTER_DURATION} />
			</div>
		</div>
	);
}

export default Layout;
