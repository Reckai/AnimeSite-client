import React from 'react';
import Link from 'next/link';

type ButtonProps = {
	text: string;
	href: string;
};
const Button: React.FC<ButtonProps> = ({ text, href }) => (
	<Link
		className="items-center justify-center rounded-md bg-white p-2 text-color-text transition duration-300 hover:text-bg-color dark:bg-secondary dark:hover:text-white"
		href={href}
	>
		{text}
	</Link>
);

export default Button;
