import React from 'react'
import InfoButton, { StatusList } from './InfoButton/InfoButton'

const StatusList: StatusList[] = [
    {
        count: 1,
        status: 'DROPPED',

    },
    {
        count: 2,
        status: 'WATCHING',

    },
    {
        count: 3,
        status: 'COMPLETED',

    },
    {
        count: 4,
        status: 'PLANNED',

    },
    {
        count: 5,
        status: 'DELAYED',

    }
]
const AnimeListInfograph = () => {
    const animeListCount = StatusList.reduce((acc, {count}) => acc + count, 0)
   
    const sortedStatusList = [...StatusList].sort((a, b) => {
        const order = ["COMPLETED", "WATCHING", "PLANNED", "DELAYED", "DROPPED"];
        return order.indexOf(a.status) - order.indexOf(b.status);
      });
  return (
    <div className='mb-2 mx-3 w-1/2'>
       <h3 className='mb-2'>
        В списках у {animeListCount} пользователей
       </h3>
       <div className='bg-color-el-bg  flex items-center flex-wrap justify-between px-4 py-6'>
         {sortedStatusList.map(({count, status}) => {
           return (<InfoButton key={status} count={count} status={status} />)
         })}
       </div>
       <div className='w-full'>
       {
        sortedStatusList.map(({count, status})=>{
         return <div key={status} className='w-full h-[1px] bg-color-text opacity-10 my-2'></div>
        })
       }
       </div>
    </div>
  )
}

export default AnimeListInfograph