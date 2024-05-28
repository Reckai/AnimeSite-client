"use client";

import React from "react";

import DropDownButton from "./Components/DropDownButton";
import useClickOutside from "@/utils/hooks/useClickOutside";
import { CHANGE_ANIME_STATUS } from "./Mutation";
import { AnimeStatus } from "@/gql/graphql";
import { useMutation } from "@urql/next";
import { useSession } from "@/app/context/SessionContext/useSession";
import { useStatus } from "./hooks/useStatus";

type DropDownPropertyType = {
  name: string;
  statusProperty: AnimeStatus;
};
export const DropDownButtonProperty: DropDownPropertyType[] = [
  { name: "Запланировано", statusProperty: AnimeStatus.Planned },
  { name: "Просмотрено", statusProperty: AnimeStatus.Completed },
  { name: "Брошено", statusProperty: AnimeStatus.Dropped },
  { name: "Отложено", statusProperty: AnimeStatus.Delayed },
  { name: "Смотрю", statusProperty: AnimeStatus.Watching },
];

function AnimeWatchButton({
  animeId,
  animeStatus,
}: {
  animeId: string;
  animeStatus: string;
}) {
  const { session } = useSession();
  const [isVisible, setIsVisible] = React.useState(false);
  const { status, changeStatus, isSelectedStatus } = useStatus(
    animeStatus as AnimeStatus
  );
  const [changeStatusMutationResult, changeStatusMutation] =
    useMutation(CHANGE_ANIME_STATUS);

  console.log(changeStatusMutationResult);
  const ClickStatusHandler = (property: DropDownPropertyType) => {
    changeStatus(property.statusProperty);
    changeStatusMutation({
      status: property.statusProperty,
      userId: session?.id as string,
      animeId,
    });
    setIsVisible(false);
  };
  const deleteHandler = () => {
    changeStatus(undefined);
    setIsVisible(false);
  };

  const AnimeStatusRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(AnimeStatusRef, () => setIsVisible(false));

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={` ${
          isSelectedStatus
            ? "bg-primary  text-white"
            : "dark:bg-secondary bg-gray-400/30 dark:hover:bg-secondary/80 hover:bg-gray-400/60 text-bg-color  dark:hover:text-white transition duration-300"
        } rounded-md 
          text-color-text h-10 w-full  cursor-pointer `}
      >
        <span className="px-2 ">{status}</span>
      </button>

      {isVisible && (
        <div className="absolute p-2  translate-x-4 max-w-96 -translate-y-20 top-auto left-0 bottom-0 right-auto   rounded-md bg-white dark:bg-opacity-secondary  text-color-text flex flex-col cursor-pointer items-center justify-center ">
          <div
            ref={AnimeStatusRef}
            className=" flex flex-col py-2 w-full  dark:bg-opacity-secondary "
          >
            {DropDownButtonProperty.map((property, index) => (
              <DropDownButton
                clickHandler={() => ClickStatusHandler(property)}
                key={index}
                text={property.name}
              />
            ))}

            {isSelectedStatus && (
              <div className="border-t-[1px] pt-[2px] mt-[2px] border-color-text ">
                <DropDownButton
                  clickHandler={deleteHandler}
                  text="Удалить из списка"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AnimeWatchButton;
