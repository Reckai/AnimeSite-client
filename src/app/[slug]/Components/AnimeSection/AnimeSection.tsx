import React from 'react';
import { Poster } from '@/__generated__/graphql';
import { PosterSection } from './SideSection/PosterSection/PosterSection';
import AboutSection, { AboutAnimeProps } from './AboutSection/AboutSection';


interface AnimeSectionProps extends AboutAnimeProps {
    poster: Poster | undefined ;
}

const AnimeSection = ({title, RuTitle, genres, description,  poster }: AnimeSectionProps) => {
    return(
        <section className='relative z-10 pt-32 '>
         <div className='mx-16 flex'>
          <aside className='mr-10 flex-none w-64'>
          <PosterSection name={title} url={poster?.originalUrl} />
          </aside>
          <AboutSection  title={title} RuTitle={RuTitle} genres={genres} description={description} />
         </div>
        </section>
    )

}

export default AnimeSection;
