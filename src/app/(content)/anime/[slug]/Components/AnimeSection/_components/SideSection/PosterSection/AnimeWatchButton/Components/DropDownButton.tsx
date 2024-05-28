import { cn } from "@/app/utils";
import React from "react";

interface DropDownButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler: () => void;
}

function DropDownButton({
  text,
  clickHandler,
  className,
  disabled,
}: DropDownButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={clickHandler}
      className={cn(
        "p-2 items-center    hover:bg-slate-500/20 dark:hover:text-white hover:rounded-md dark:hover:bg-form-color",
        className
      )}
    >
      <span className="mx-2">{text}</span>
    </button>
  );
}

export default DropDownButton;
