import React from 'react';
import Link from 'next/link';

type ButtonProps = {
    text: string, href:string
}
const Button:React.FC<ButtonProps> = ({ text, href }) => (
  <Link className=" bg-white dark:bg-secondary hover:text-bg-color dark:hover:text-white transition duration-300 text-color-text rounded-md items-center justify-center p-2" href={href}>
    {text}
  </Link>
);

export default Button;
