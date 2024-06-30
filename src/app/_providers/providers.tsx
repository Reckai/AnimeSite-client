import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import SessionWrapper from "./SessionWrapper";
import { getCookie } from "@/lib/gqlClient";
import GraphQLProvider from "./GraphQLProvider/GraphQlProvider";
import QueryProvider from "./QueryProvider";
import { cookies } from "next/headers";
const Provider = async ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("access-token")?.value || "";
  return (
    <SessionWrapper>
      <GraphQLProvider token={token}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {" "}
            {children}
          </ThemeProvider>
        </QueryProvider>
      </GraphQLProvider>
    </SessionWrapper>
  );
};

export default Provider;
