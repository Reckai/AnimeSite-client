import React, { Suspense } from "react";
import MainContent from "@/app/_Components/MainContent/MainContent";
import Loading from "@/app/(content)/_components/Loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainContent />
    </Suspense>
  );
}
