import React from 'react'
import DropDownButton from './Components/DropDownButton'
import useAnimeStatus from '@/utils/hooks/useAnimeStatus'
import useWatchAnimeStatus from '@/utils/hooks/useWatchStatus'
import useClickOutside from '@/utils/hooks/useClickOutside'

const DropDownButtonText = ['Запланировано', 'Смотрю', 'Просмотрено', 'Брошено', 'Отложено']
const DropDownButtonInitialText = '+ Добавить в список'
const AnimeWatchButton = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const {status, changeStatus} = useAnimeStatus(DropDownButtonInitialText)
  const selectedStatus = useWatchAnimeStatus(DropDownButtonInitialText, status);
  const ClickStatusHandler = (newStatus: string) => {
    changeStatus(newStatus)
    setIsVisible(false)
  }
  const deleteHandler = () => {
    changeStatus(DropDownButtonInitialText)
    setIsVisible(false)
  }

  const AnimeStatusRef = React.useRef<HTMLDivElement>(null); 
 useClickOutside(AnimeStatusRef, ()=> setIsVisible(false));
 return (
    <>
        <button onClick={()=> setIsVisible(!isVisible)} className={` ${selectedStatus? 'bg-primary  text-white': 'bg-secondary hover:bg-secondary/80 hover:text-white transition duration-300'} rounded-md 
          text-color-text h-10 w-full  cursor-pointer `}  >
         <span className='px-2 '>
          {
           status
          }
         </span>
        </button>

       {
              isVisible && <div className='absolute p-2  translate-x-4 max-w-96 -translate-y-20 top-auto left-0 bottom-0 right-auto   rounded-md bg-opacity-secondary  text-color-text flex flex-col cursor-pointer items-center justify-center '  >
             <div ref={AnimeStatusRef} className=' flex flex-col py-2 w-full bg-opacity-secondary '>
             
               {DropDownButtonText.map((text, index) => {
                  return <DropDownButton clickHandler={ClickStatusHandler} key={index} text={text} />
               })}
             
             {
              selectedStatus && <div className='border-t-[1px] pt-[2px] mt-[2px] border-color-text '>
                <DropDownButton clickHandler={deleteHandler} text={'Удалить из списка'} />
              </div>
             }
             
             </div>
             
             </div>
       }
    </>
  )
}

export default AnimeWatchButton