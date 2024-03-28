"use client";

import React from "react";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import DropDownButton from "./Components/DropDownButton";
import useAnimeStatus from "@/utils/hooks/useAnimeStatus";
import useWatchAnimeStatus from "@/utils/hooks/useWatchStatus";
import useClickOutside from "@/utils/hooks/useClickOutside";
import { AnimeStatus } from "@/__generated__/graphql";
import { CHANGE_ANIME_STATUS } from "@/app/anime/[slug]/Components/AnimeSection/SideSection/PosterSection/AnimeWatchButton/Mutation";

type DropDownPropertyType = {
  name: string;
  statusProperty: AnimeStatus;
};
const DropDownButtonProperty: DropDownPropertyType[] = [
  { name: "Запланировано", statusProperty: AnimeStatus.Planned },
  { name: "Просмотрено", statusProperty: AnimeStatus.Completed },
  { name: "Брошено", statusProperty: AnimeStatus.Dropped },
  { name: "Отложено", statusProperty: AnimeStatus.Delayed },
  { name: "Смотрю", statusProperty: AnimeStatus.Watching },
];

const DropDownButtonInitialText = "+ Добавить в список";
function AnimeWatchButton({
  animeId,
  animeStatus,
}: {
  animeId: string;
  animeStatus: string;
}) {
  const session = useSession();
  const [isVisible, setIsVisible] = React.useState(false);
  const { status, changeStatus } = useAnimeStatus(DropDownButtonInitialText);
  const selectedStatus = useWatchAnimeStatus(DropDownButtonInitialText, status);
  const [changeAnimeStatus, { data }] = useMutation(CHANGE_ANIME_STATUS);
  React.useEffect(() => {
    changeStatus(
      DropDownButtonProperty.find(
        (property) => property.statusProperty === animeStatus
      )?.name
    );
  }, [animeStatus]);
  const ClickStatusHandler = (property: DropDownPropertyType) => {
    changeStatus(property.name);
    changeAnimeStatus({
      variables: {
        status: property.statusProperty,
        userId: session.data?.user?.id as String,
        animeId,
      },
    });
    setIsVisible(false);
  };
  const deleteHandler = () => {
    changeStatus(DropDownButtonInitialText);
    setIsVisible(false);
  };

  const AnimeStatusRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(AnimeStatusRef, () => setIsVisible(false));
  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={` ${
          selectedStatus
            ? "bg-primary  text-white"
            : "bg-secondary hover:bg-secondary/80 hover:text-white transition duration-300"
        } rounded-md 
          text-color-text h-10 w-full  cursor-pointer `}
      >
        <span className="px-2 ">{status}</span>
      </button>

      {isVisible && (
        <div className="absolute p-2  translate-x-4 max-w-96 -translate-y-20 top-auto left-0 bottom-0 right-auto   rounded-md bg-opacity-secondary  text-color-text flex flex-col cursor-pointer items-center justify-center ">
          <div
            ref={AnimeStatusRef}
            className=" flex flex-col py-2 w-full bg-opacity-secondary "
          >
            {DropDownButtonProperty.map((property, index) => (
              <DropDownButton
                clickHandler={() => ClickStatusHandler(property)}
                key={index}
                text={property.name}
              />
            ))}

            {selectedStatus && (
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
