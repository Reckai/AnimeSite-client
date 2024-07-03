"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthWiaGoogle } from "./hooks/useAuthWiaGoogle";
const OAuthGoogleButton = () => {
  const { login } = useAuthWiaGoogle();

  return (
    <button
      onClick={() => login()}
      className="border-color-text group  flex items-center  hover:border-white transition duration-150 border-2 rounded-md p-2 "
    >
      <FcGoogle className="text-color-text group-hover:text-white transition duration-150" />
      <span className="group-hover:text-white text-color-text-accent transition ml-1 duration-150">
        Sign in with Google
      </span>
    </button>
  );
};

export default OAuthGoogleButton;
