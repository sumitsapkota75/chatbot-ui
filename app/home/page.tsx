"use client";

import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import "../globals.css";
import { useSession } from "next-auth/react";
import { chat } from "@/services/chat";
import Loader from "@/components/loader";
import { CreateUser, IUser } from "@/services/user";


interface Message {
  text: string;
  isUser: boolean;
}

const Home = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const data = {
      text: input,
    };
    try {
      if (input.trim()) {
        const userMessage: Message = { text: input, isUser: true };
        setMessages((prevMessages) => [
          ...prevMessages,
          userMessage,
        ]);
        setInput("");
        setLoading(true);
        const response = await chat(data);
        const botResponse: Message = { text: response.response, isUser: false };
        setLoading(false)
        setMessages((prevMessages) => [
          ...prevMessages,
          botResponse,
        ]);
      }
    } catch (error) {
      console.log("Error occured.", error);
      setInput("");
    } finally {
      setLoading(false);
    }
  };

  console.log({session})
  const userImage = session?.user?.image || "/default-user.png";
  const hasConversationStarted = messages.length > 0;
  
  useEffect(() => {
    if (session?.user){
    const createUser = async () => {
      try {
        const userData = {
          name: session?.user?.name || "-",
          email:session?.user?.email || "-",
          image: session?.user?.image || "-"
        };
        const result = await CreateUser(userData);
        console.log('User created successfully:', result);
      } catch (error) {
        console.error('Error in useEffect while creating user:', error);
      }
    };

    createUser();
  }
  }, [session]);
  

  return (
    <div
      className="flex flex-col h-full  bg-white"
      style={{ height: "calc(100vh - 72px)" }}
    >
      <div className="flex flex-col flex-1 items-center justify-center overflow-auto p-4">
        {!hasConversationStarted && (
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/chatgpt.png"
                alt="chatgpt-image"
                width={60}
                height={60}
              />
            </div>
            <div className="text-xl font-bold my-4">
              How can I help you today?
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1 max-w-xl mt-1 mb-4 overflow-y-auto p-4 rounded-xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start my-2 ${
                message.isUser ? "justify-start" : "justify-start"
              }`}
            >
              <Image
                src={message.isUser ? userImage : "/chatgpt.png"}
                alt={message.isUser ? "user-image" : "chatgpt-image"}
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div
                className={`my-2 p-2 rounded ${
                  message.isUser
                    ? "bg-blue-200 text-left"
                    : "bg-gray-200 text-left"
                } animate-slide-in`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {loading && <Loader/>}
        </div>
      </div>
      <div className="flex justify-center items-center max-w-xl w-full mx-auto bg-white p-4 rounded-xl border shadow-md">
        <input
          type="text"
          className="rounded outline-none w-full p-1"
          placeholder="Message ChatGPT"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button onClick={handleSend}>
          <IoSend className="disabled:fill-gray-400" />
        </button>
      </div>
      <div className="text-xs text-gray-500 text-center mt-3">
        ChatGPT can make mistakes. Check important info.
      </div>
    </div>
  );
};

export default Home;
