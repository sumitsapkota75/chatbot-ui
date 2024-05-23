"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";

const Home = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{ text: '', isUser: false }]);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { text: input, isUser: true };
            const botResponse = { text: 'This is a response from ChatGPT.', isUser: false };

            setMessages([...messages, userMessage, botResponse]);
            setInput('');
        }
    };

    const hasConversationStarted = messages.length > 1;
    return (
        <div className='flex flex-col justify-between h-full w-full bg-white'>
            <div className='flex flex-col flex-1 items-center justify-center overflow-auto p-4'>
                {!hasConversationStarted && (
                    <>
                        <div>
                            <Image src={"/chatgpt.png"} alt='chatgpt-image' width={60} height={60} />
                        </div>
                        <div className="text-xl font-bold my-4">How can I help you today?</div>
                    </>
                )}
                {hasConversationStarted && (
                    <div className="flex flex-col flex-1 w-full max-w-xl mt-4 mb-16 overflow-y-auto p-4 rounded-xl">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 p-2 rounded ${message.isUser ? 'bg-blue-200 text-left' : 'bg-gray-200 text-left'}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex justify-center items-center max-w-xl w-full mx-auto bg-white p-4 rounded-xl border shadow-md'>
                <input
                    type="text"
                    className='rounded outline-none w-full p-1'
                    placeholder='Message ChatGPT'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                />
                <button onClick={handleSend}>
                    <IoSend className='disabled:fill-gray-400' />
                </button>
            </div>
            <div className="text-xs text-gray-500 text-center mt-3">ChatGPT can make mistakes. Check important info.</div>
        </div>
    )
}

export default Home
