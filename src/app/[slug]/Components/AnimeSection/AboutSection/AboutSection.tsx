import React from 'react'
import {Anime} from '@/__generated__/graphql';
import { AboutAnimeHeader, AboutAnimeHeaderProps } from './Header/AboutAnimeHeader';
import Button from './GenreButton/Button';
import InfoButton from './AnimeInListInfograph/InfoButton/InfoButton';
import AnimeListInfograph from './AnimeInListInfograph/AnimeListInfograph';

export type AboutAnimeProps = AboutAnimeHeaderProps & {
    description: Anime['description'];
    genres: Anime['genres'];

}

const AboutSection = ({title, RuTitle, description, genres}: AboutAnimeProps) => {
  return (
    <div className='mt-8'>
        <AboutAnimeHeader  title={title} RuTitle={RuTitle} />
        <div className=' flex mt-4  mb-4 gap-1'>
       {
        genres?.map((genre) => {
            return <Button key={genre.id} text={genre.russian} href={`/genre/${genre.name}`} />
        })
       }
        </div>
        <article className='py-3 mb-3 leading-snug text-color-text break-words'>
          {
            description
          }
        </article>
        <article>
        <AnimeListInfograph />
        </article>

    </div>
  )
}

export default AboutSection