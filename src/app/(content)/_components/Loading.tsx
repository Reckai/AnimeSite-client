import React from "react";
import { Skeleton } from "@/app/shared/Skeleton/Skeleton";

const Loading = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  return (
    <div className={"grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-4"}>
      {skeletons.map((_, index) => {
        return (
          <div
            className={
              "flex flex-col md:w-max-calc(25%-20px) sm:w-50%  lg:w-max-calc(16%-20px) m-b-2 mx-2.5"
            }
            key={index}
          >
            <Skeleton className={"h-72 w-full"} />
            <Skeleton className={"h-3 w-20"} />
            <Skeleton className={"h-2 w-32"} />
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
