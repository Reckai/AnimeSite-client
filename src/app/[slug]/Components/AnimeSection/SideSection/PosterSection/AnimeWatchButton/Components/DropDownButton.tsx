import React from 'react'
type DropDownButtonProps = {
    text: string
    clickHandler: (arg0:string) => void
    
}
const DropDownButton = ({text, clickHandler}:DropDownButtonProps) => {
  return (
    <button onClick={()=> clickHandler(text)} className='p-2 items-center hover:text-white hover:rounded-md hover:bg-form-color'>
        <span className='mx-2'>
        {text}
        </span>
    </button>
  )
}

export default DropDownButton