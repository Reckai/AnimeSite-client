import React from 'react';
import Image from 'next/image';
import { Poster } from '@/__generated__/graphql';
import AnimeWatchButton from './AnimeWatchButton/AnimeWatchButton';


interface AnimeSectionProps {
    name: string | undefined;
    poster: Poster | undefined ;
}

const AnimeSection = ({name, poster }: AnimeSectionProps) => {
    console.log(poster)
    return(
        <section className='relative z-10 pt-32 '>
         <div className='mx-16 flex'>
          <aside className='mr-16 flex-none w-64'>
           <article className='mb-4 '>
            <div className='mb-4'>
            <Image className='rounded-md'  alt={name ? 'ds' : 'sad'} src={poster?.originalUrl}
           width={500} height={500} />
            </div>
            <div className='flex'>
            <AnimeWatchButton/> 
            </div>
            
            
           </article>
          </aside>
        
         </div>
        </section>
    )

}

export default AnimeSection;
