'use client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuthWiaGoogle } from './hooks/useAuthWiaGoogle';
const OAuthGoogleButton = () => {
	const { login } = useAuthWiaGoogle();

	return (
		<button
			onClick={() => login()}
			className="group flex items-center rounded-md border-2 border-color-text p-2 transition duration-150 hover:border-white"
		>
			<FcGoogle className="text-color-text transition duration-150 group-hover:text-white" />
			<span className="ml-1 text-color-text-accent transition duration-150 group-hover:text-white">
				Sign in with Google
			</span>
		</button>
	);
};

export default OAuthGoogleButton;
