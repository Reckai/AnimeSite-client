import React from 'react';

type DropDownButtonProps = {
    text: string
    clickHandler: () => void

}
function DropDownButton({ text, clickHandler }:DropDownButtonProps) {
  return (
    <button onClick={ clickHandler} className="p-2 items-center hover:text-white hover:rounded-md hover:bg-form-color">
      <span className="mx-2">
        {text}
      </span>
    </button>
  );
}

export default DropDownButton;
