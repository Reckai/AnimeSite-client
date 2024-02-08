import React from 'react'
import {Anime} from '@/__generated__/graphql';
import { AboutAnimeHeader, AboutAnimeHeaderProps } from './Header/AboutAnimeHeader';
import Button from './GenreButton/Button';

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
        <article></article>
    </div>
  )
}

export default AboutSection