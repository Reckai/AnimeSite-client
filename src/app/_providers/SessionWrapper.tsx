import React from "react";
import { graphql } from "@/gql";
import {
  SessionProvider,
  SessionProviderProps,
} from "@/app/context/SessionContext/SessionProvider";
import { cookies } from "next/headers";
import { getClientWithAuthorization } from "@/lib/gqlClient";
import { isServer } from "@tanstack/react-query";

export const profileQuery = graphql(`
  query Me {
    me {
      id
      email
      name
      image
      role
      createdAt
    }
  }
`);

async function SessionWrapper({ children }: React.PropsWithChildren) {
  console.log(isServer, "SERVER");
  const token = cookies().get("access-token")?.value || "";
  const session: Omit<SessionProviderProps, "children"> = {
    defaultSession: undefined,
  };
  console.log("token", !!token);
  if (!!token) {
    const profileQueryResult = await getClientWithAuthorization()
      .request(profileQuery)
      .catch((e) => {
        console.error(e);
        return undefined;
      });

    const sessionResult = profileQueryResult?.me;
    console.log("session", sessionResult);
    if (sessionResult) {
      session.defaultSession = {
        id: sessionResult.id as string,
        name: sessionResult.name as string,
        createAt: sessionResult.createdAt as string,
        email: sessionResult.email as string,
      };
    }
  }

  return <SessionProvider {...session}>{children}</SessionProvider>;
}
export default SessionWrapper;
