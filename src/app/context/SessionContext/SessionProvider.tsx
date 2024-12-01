'use client';

import { useMemo, useState } from 'react';
import { SessionContext, session } from './SessionContext';

export interface SessionProviderProps {
	defaultSession?: session;
	children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ defaultSession, children }) => {
	const [session, setSession] = useState<session | undefined>(defaultSession!);

	const value = useMemo(() => ({ session, setSession }), [session]);

	const updateSessionField = <K extends keyof session>(field: K, value: session[K]) => {
		if (!session) return;
		setSession({ ...session, [field]: value });
	};

	return (
		<SessionContext.Provider value={{ ...value, updateSessionField }}>
			{children}
		</SessionContext.Provider>
	);
};
