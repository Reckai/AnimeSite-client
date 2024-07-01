"use client";

import { Button } from "@/app/shared/Button/Button";
import { AnimeStatus } from "@/gql/graphql";
import React, { useState } from "react";

type DropDownPropertyType = {
  name: string;
  statusProperty: AnimeStatus;
};
type AnimeStatusProps = {
  animeId: string;
  initialStatus: string;
};

export const DropDownButtonProperty: DropDownPropertyType[] = [
  { name: "Запланировано", statusProperty: AnimeStatus.Planned },
  { name: "Просмотрено", statusProperty: AnimeStatus.Completed },
  { name: "Брошено", statusProperty: AnimeStatus.Dropped },
  { name: "Отложено", statusProperty: AnimeStatus.Delayed },
  { name: "Смотрю", statusProperty: AnimeStatus.Watching },
];

const AnimeStatusButton: React.FC<AnimeStatusProps> = ({
  animeId,
  initialStatus = "Добавить в список +",
}) => {
  const [currentStatus, setCurrentStatus] = useState(initialStatus);
  return (
    <div>
      <Button
        variant={
          currentStatus === DropDownButtonProperty[0].name
            ? "thirdly"
            : "default"
        }
        className="w-full"
        value={currentStatus}
        onClick={() => console.log(currentStatus)}
      >
        {currentStatus}
      </Button>
    </div>
  );
};

export default AnimeStatusButton;
