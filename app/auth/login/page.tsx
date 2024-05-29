"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import { RiGoogleLine } from 'react-icons/ri';
import Image from 'next/image';
import { GenerateChatID } from '@/lib/uuid';

const Login = () => {
  const handleLogin = async () => {
    const conversation_id = GenerateChatID()
    await signIn("google", {
      callbackUrl: `/chat/${conversation_id}`
    });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="text-4xl font-bold mb-8">Codex</div>
      <div className="mb-8">
        <Image src="/gemini.svg" alt="Gemini Logo" width={100} height={100} />
      </div>
      <button onClick={handleLogin} className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg flex items-center">
        <RiGoogleLine className="mr-2" /> Login with Google
      </button>
    </div>
  );
};

export default Login;
