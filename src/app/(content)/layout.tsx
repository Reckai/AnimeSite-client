import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mt-24 mx-auto px-4">{children}</div>;
}

export default Layout;
