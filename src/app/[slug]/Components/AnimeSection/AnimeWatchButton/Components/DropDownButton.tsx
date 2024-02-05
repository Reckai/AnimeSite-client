import React from 'react'
type DropDownButtonProps = {
    text: string
    
}
const DropDownButton = ({text}:DropDownButtonProps) => {
  return (
    <button className='p-2 items-center hover:text-white hover:rounded-md hover:bg-form-color'>
        <span className='mx-2'>
        {text}
        </span>
    </button>
  )
}

export default DropDownButton