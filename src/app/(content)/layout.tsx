import React from "react";
import { Toaster } from "sonner";
const TOASTER_DURATION = 5000;
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-24 mx-auto px-4">
      {children}
      <Toaster duration={TOASTER_DURATION} />
    </div>
  );
}

export default Layout;
