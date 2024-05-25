"use client"
import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { GetConversation } from "@/services/user";
import { GenerateChatID } from "@/lib/uuid";
import { useRouter } from "next/navigation";


const data = [
  { id: 1, title: "How are you doing?" },
  { id: 2, title: "How are you doing?" },
  { id: 3, title: "How are you doing?" },
  // Repeat data to simulate more items
];



const SideNav = () => {
  const router = useRouter()
  const { data: session } = useSession();
  const [conversations, setconversations] = useState([])
  useEffect(() => {
    if(session?.user){
      const getConversations = async()=> {
        const result = await GetConversation(session?.user?.email || "")
        setconversations([])
        console.log({result})
      }
      getConversations()
    }
  }, [session])
  const createNewChat = () => {
    const conversation_id = GenerateChatID()
    router.push(`/chat/${conversation_id}&newChat=true`)
   }
  return (
    <div className="h-screen w-60 bg-gray-200 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 72px)'}}>
      <div className="menu-items">
          <div onClick={createNewChat} className="menu-item flex flex-row mb-4 p-2 rounded hover:bg-gray-400 cursor-pointer">
            <div className="font-normal">Create a new chat</div>
            <div className="new-conversation flex justify-center items-center mx-4 min-h-5 min-w-5 rounded hover:cursor-pointer">
              <IoCreateOutline />
            </div>
          </div>
        <div className="info text-xs mb-2 text-gray-600">Previous Conversations</div>
        {data.map((item) => (
          <div key={item.id} className="menu-item mb-2 p-2 rounded hover:bg-gray-400 cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
