import React from "react";
import { getClient } from "./UrqlProvider/getClient";
import { graphql } from "@/gql";
import {
  SessionProvider,
  SessionProviderProps,
} from "@/app/context/SessionContext/SessionProvider";
import { cookies } from "next/headers";

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
  const token = cookies().get("access-token")?.value || "";
  const session: Omit<SessionProviderProps, "children"> = {
    defaultSession: undefined,
  };
  console.log("token", !!token);
  if (!!token) {
    const profileQueryResult = await getClient()
      .request(profileQuery, {})
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
