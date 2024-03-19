import React from 'react';
import CardWrapper from '@/app/shared/CardWrapper/CardWrapper';
import SignInForm from '@/app/auth/signin/_components/SignInForm';

function LoginPage() {
  return (
    <CardWrapper headerText={'Sign In'} backButtonLink={'/'} backButtonText={'Back to Main Page'}>
        <SignInForm/>
    </CardWrapper>
  );
}

export default LoginPage;
