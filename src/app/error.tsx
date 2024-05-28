"use client";

// Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div>
        <h2>Something went wrong!</h2>
      </div>
    </div>
  );
}
