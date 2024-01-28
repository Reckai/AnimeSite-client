import React from 'react';
import Image from 'next/image'
import Katya from '@/../public/photo_2023-10-17_20-43-52.jpg'
import Link from "next/link";
import { Genre, Maybe, Poster } from '@/__generated__/graphql';
type AnimeCard = {
    id: string;
    title: string;
    description: Maybe<Genre[]> | undefined;
    poster: Poster;
    slug: string;
}


const AnimeCard = ({title,poster, slug, description}: AnimeCard) => {
    return (
        <Link href={`/${slug}`} className='flex flex-col md:w-calc(25%-20px) sm:w-50%  lg:w-calc(16%-20px) m-b-2 mx-2.5   '>
           <Image
                width={500}
                height={500}
               src={poster.originalUrl}
               alt="Picture of the author" className={'rounded-lg'}
           />
           

            <div>
                <h1 className='dark:text-color-text-accent'>{title}</h1>
                <p className='dark:text-color-text'>{
                    description?.map((genre) => genre.russian).join(', ')
                }</p>
            </div>
        </Link>
    );
};

export default AnimeCard;
