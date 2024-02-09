import React from "react";

const Status_Settings = {
  COMPLETED: { color: "bg-success", text: "Просмотрено" },
  WATCHING: { color: "bg-info", text: "Смотрю" },
  PLANNED: { color: "bg-primary", text: "Запланировано" },
  DELAYED: { color: "bg-warning", text: "Брошено" },
  DROPPED: { color: "bg-error", text: "Отложено" },
};

export type StatusList = {
  count: number;
  status: keyof typeof Status_Settings;
};

const InfoButton: React.FC<StatusList> = ({ count, status }) => {
  

  return (
    <div className="text-sm">
      <span
        className={`${Status_Settings[status].color} mb-[3px] inline-flex text-white h-7 px-3     items-center justify-center rounded-md border-[1px] border-transparent`}
      >
        <span className="leading-snug">{Status_Settings[status].text}</span>
      </span>
      <div className={`items-center text-center`}>
        {count}
        <span className="text-color-text"> в списке</span>
      </div>
    </div>
  );
};

export default InfoButton;
