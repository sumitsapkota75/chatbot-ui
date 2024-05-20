"use client"
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { IoSend } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col min-h-screen justify-center items-center'>
                <div>
                    <Image src={"/chatgpt.png"} alt='chatgpt-image' width={60} height={60} />
                </div>
                <div className="text-xl font-bold my-4">How can I help you today?</div>
                <div className='search-box fixed bottom-10  flex justify-center items-center max-w-xl w-full bg-white p-4 rounded-xl border shadow-md'>
                    <input type="text" className='rounded outline-none w-full p-1' placeholder='Message ChatGPT' />
                    <button onClick={()=> console.log("Button clicked")}>
                        <IoSend className='disabled:fill-gray-400' />
                    </button>
                </div>
                <div className="fixed bottom-3 text-xs text-gray-500">ChatGPT can make mistakes. Check important info.</div>  
                
            </div>

        </>
    )
}

export default Home