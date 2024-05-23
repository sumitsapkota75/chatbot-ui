"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import { RiGoogleLine } from 'react-icons/ri';
import Image from 'next/image';

const Login = () => {
  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/home"
    });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="text-4xl font-bold mb-8">ChatGPT</div>
      <div className="mb-8">
        <Image src="/chatgpt.png" alt="ChatGPT Logo" width={100} height={100} />
      </div>
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
        <RiGoogleLine className="mr-2" /> Login with Google
      </button>
    </div>
  );
};

export default Login;
