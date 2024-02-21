import React from 'react'
import InfoButton from './InfoButton/InfoButton'
import ProgressBar from './LineGraph/LineGraph'
import {  AnimeListStatusDistribution } from '@/__generated__/graphql'


export type AnimeListInfographProps ={
  animeListInfo: AnimeListStatusDistribution[] | undefined
}
const AnimeListInfograph:React.FC< AnimeListInfographProps> = ({animeListInfo}) => {
  const graphRef = React.useRef<HTMLDivElement>(null)
  
  if(!animeListInfo) {return null}

  
    const AllUserCount = animeListInfo.reduce((acc, {count}) => acc + count, 0);
    const sortedStatusList = [...animeListInfo].sort((a, b) => {
        const order = ["COMPLETED", "WATCHING", "PLANNED", "DELAYED", "DROPPED"];
        return order.indexOf(a.status) - order.indexOf(b.status);
      });

  return (
    <div className='mb-2 mx-3 w-1/2'>
       <h3 className='mb-2'>
        В списках у {AllUserCount} пользователей
       </h3>
       <div className='bg-color-el-bg  flex items-center flex-wrap justify-between px-4 py-6'>
         {sortedStatusList.map(({count, status}) => {
           return (<InfoButton key={status} count={count} status={status} />)
         })}
       </div>
       <div ref={graphRef} className='w-full rounded-md'>
       <ProgressBar data ={sortedStatusList}  ></ProgressBar>
       </div>
    </div>
  )
}

export default AnimeListInfograph