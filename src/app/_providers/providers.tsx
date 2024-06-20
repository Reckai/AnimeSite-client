import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import SessionWrapper from "./SessionWrapper";
import { cookies } from "next/headers";
import GraphQLProvider from "./UrqlProvider/GraphQLProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("access-token")?.value || "";

  return (
    <GraphQLProvider>
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
