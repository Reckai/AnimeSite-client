import React from "react";
import { Skeleton } from "@/app/shared/Skeleton/Skeleton";

const AnimeLoading = () => {
  return (
    <div className="relative z-10">
      <div className="mx-16 flex">
        <div className="mr-10 flex-none w-64">
          <Skeleton className="w-[256px] h-[301px]" />
        </div>
        <div className="mt-8 space-y-2">
          <Skeleton className="w-80 h-9" />
          <Skeleton className="w-40 h-7" />
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            {Array(5).map((i) => (
              <Skeleton key={i} className="w-10 h-10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLoading;
