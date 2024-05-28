import React from "react";

type DropDownButtonProps = {
  text: string;
  clickHandler: () => void;
};
function DropDownButton({ text, clickHandler }: DropDownButtonProps) {
  return (
    <button
      onClick={clickHandler}
      className="p-2 items-center  hover:bg-slate-500/20 dark:hover:text-white hover:rounded-md dark:hover:bg-form-color"
    >
      <span className="mx-2">{text}</span>
    </button>
  );
}

export default DropDownButton;
