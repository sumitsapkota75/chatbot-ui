"use client" // Necessary for `signIn` to work on the client-side

import Button from '@/components/button';
import React, { useEffect } from 'react';
import { RiGoogleLine } from 'react-icons/ri';
import { signIn, useSession } from "next-auth/react";
import LoginLayout from './layout';

const Login = () => {

  const HandleLogin = async () => {
    await signIn("google",{
      callbackUrl: "/home"
    });
  };
  return (
    <div>
      <Button
        text="Login with google"
        width="100px"
        isLoading={false}
        leadingIcon={<RiGoogleLine />}
        onClick={HandleLogin}
      />
    </div>
  );
};

export default (Login);
