import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {" "}
      {children}
    </ThemeProvider>
  );
};

export default Provider;
