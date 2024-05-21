"use client"
import Button from '@/components/button'
import React from 'react'
import { RiGoogleLine } from 'react-icons/ri'
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <Button  text="Login with google" width='100px' isLoading={false} leadingIcon={<RiGoogleLine />} onClick={()=>signIn("google")}/>
    </div>
  )
}

export default Login