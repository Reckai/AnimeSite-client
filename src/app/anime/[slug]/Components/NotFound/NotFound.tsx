import React from 'react'
import Image from "next/image";
import AnimeNotFound from './assets/evaporate-disappear.gif'
const NotFound = () => {
  return (
    <div className='text-white relative mx-auto my-auto text-center'>
        <h1 className='text-2xl' >Anime Not Found</h1>
        <Image width={300} height={300} src={AnimeNotFound} alt='Anime Not Found' />

        
    </div>
  )
}

export default NotFound