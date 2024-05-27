"use client";

import { useMemo, useState } from "react";
import { SessionContext, session } from "./SessionContext";

export interface SessionProviderProps {
  defaultSession?: session;
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  defaultSession,
  children,
}) => {
  const [session, setSession] = useState<session | null>(defaultSession!);
  const value = useMemo(() => ({ session, setSession }), [session]);
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
