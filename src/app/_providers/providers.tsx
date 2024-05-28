import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import GraphQLProvider from "./UrqlProvider/GraphQLProvider";
import SessionWrapper from "./SessionWrapper";
import { cookies } from "next/headers";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("access-token")?.value || "";

  return (
    <GraphQLProvider token={token}>
      <SessionWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </SessionWrapper>
    </GraphQLProvider>
  );
};

export default Provider;
