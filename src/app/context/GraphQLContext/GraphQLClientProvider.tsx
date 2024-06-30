"use client";

import { useMemo, useState } from "react";
import {
  ClientContextProps,
  GraphQLClientContext,
} from "./GraphQlClientContext";
export interface GraphQlClientProviderProps {
  defaultClient?: ClientContextProps["client"];
  children: React.ReactNode;
}

export const GraphQLClientProvider: React.FC<GraphQlClientProviderProps> = ({
  defaultClient,
  children,
}) => {
  const [client, setClient] = useState<
    ClientContextProps["client"] | undefined
  >(defaultClient);

  const value = useMemo(
    () => ({
      client,
      setClient,
    }),
    [client]
  );

  return (
    <GraphQLClientContext.Provider value={value}>
      {children}
    </GraphQLClientContext.Provider>
  );
};
