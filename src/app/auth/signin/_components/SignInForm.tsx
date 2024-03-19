'use client';

import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import Button from '@/app/Components/Button/Button';

function SignInForm() {
  const onClick = (provider: 'discord') => {
    signIn(provider);
  };
  return (
    <Button action={() => onClick('discord')} variant="primary">
      <FaDiscord />
      Sign in with Discord
    </Button>

  );
}

export default SignInForm;
