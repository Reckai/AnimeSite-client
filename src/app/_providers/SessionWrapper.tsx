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
  const asdasd = cookies().get("qid")?.value || "";
  console.log(asdasd, "asdasd2");
  const session: Omit<SessionProviderProps, "children"> = {
    defaultSession: undefined,
  };

  if (!!asdasd) {
    const profileQueryResult = await getClientWithAuthorization()
      .request(profileQuery)
      .catch((e) => {
        console.error(e);
        return undefined;
      });
    console.log(profileQueryResult);
    const sessionResult = profileQueryResult?.me;

    if (sessionResult) {
      session.defaultSession = {
        id: sessionResult.id as string,
        name: sessionResult.name as string,
        createAt: sessionResult.createdAt as string,
        email: sessionResult.email as string,
        image: sessionResult.image as string,
      };
    }
  }

  return <SessionProvider {...session}>{children}</SessionProvider>;
}
export default SessionWrapper;
