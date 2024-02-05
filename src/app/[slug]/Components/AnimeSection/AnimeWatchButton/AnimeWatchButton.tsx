import React from 'react'
import DropDownButton from './Components/DropDownButton'

const DropDownButtonText = ['Запланировано', 'Смотрю', 'Просмотрено', 'Брошено', 'Отложено']
const AnimeWatchButton = () => {
  const [clicked, setClicked] = React.useState(false)
 
    return (
    <>
        <button onClick={()=> setClicked(!clicked)} className='rounded-md 
         bg-secondary text-color-text h-10 w-full  cursor-pointer hover:bg-secondary/80'  >
         <span className='px-2 '>
            + Добавить в список
         </span>
        </button>

       {
              clicked && <div className='absolute p-2  translate-x-4 max-w-96 -translate-y-20 top-auto left-0 bottom-0 right-auto   rounded-md bg-opacity-secondary  text-color-text flex flex-col cursor-pointer items-center justify-center '  >
             <div className=' flex flex-col py-2 w-full bg-opacity-secondary '>
             
               {DropDownButtonText.map((text, index) => {
                  return <DropDownButton key={index} text={text} />
               })}
             </div>
             
             </div>
       }
    </>
  )
}

export default AnimeWatchButton