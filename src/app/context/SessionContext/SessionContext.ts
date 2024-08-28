'use client';

import { createContext } from 'react';

export interface session {
	id: string;
	email: string;
	createAt: string;
	name: string;
	image?: string;
}

export interface SessionContextProps {
	session: session | undefined;
	setSession: (session: session | undefined) => void;
}

export const SessionContext = createContext<SessionContextProps>({
	session: undefined,
	setSession: () => {}
});
