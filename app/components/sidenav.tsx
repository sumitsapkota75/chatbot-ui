"use client";
import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { GetConversation } from "@/services/user";
import { GenerateChatID, GetUUIDFromUrl } from "@/lib/uuid";
import { usePathname, useRouter } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";

const SideNav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [conversations, setConversations] = useState<any[]>([]);
  const [newChat, setnewChat] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (session?.user) {
      const getConversations = async () => {
        const result = await GetConversation(session?.user?.email || "");
        setConversations(result.data);
      };
      getConversations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, newChat]);

  const createNewChat = async () => {
    setnewChat(true); // Set flag for new chat creation

    const conversation_id = GenerateChatID();
    router.push(`/chat/${conversation_id}`);

    // Refetch conversations after creating a new chat
    if (session?.user) {
      const result = await GetConversation(session?.user?.email || "");
      setConversations(result.data);
    }

    setnewChat(false); // Reset flag after refetch
  };
  const chat_id = GetUUIDFromUrl(pathname);
  return (
    <div
      className="h-screen w-60 bg-gray-100 p-4 overflow-y-auto border-t-2"
      style={{ height: "calc(100vh - 72px)" }}
    >
      <div className="menu-items">
        <div
          onClick={createNewChat}
          className="menu-item flex flex-row mb-4 p-2 rounded hover:bg-gray-400 cursor-pointer"
        >
          <div className="font-semibold">Create a new chat</div>
          <div className="new-conversation flex justify-center items-center mx-4 min-h-5 min-w-5 rounded hover:cursor-pointer">
            <IoCreateOutline />
          </div>
        </div>
        <div className="info text-xs mb-2 text-gray-600">
          Previous Conversations
        </div>
        {conversations &&
          conversations?.map((conversation, index) => (
            <div
              key={index}
              onClick={() =>
                router.push(`/chat/${conversation.conversation_id}`)
              }
              className={`flex items-center justify-between text-left menu-item mb-2 p-2 rounded hover:bg-gray-400 cursor-pointer ${
                chat_id == conversation?.conversation_id
                  ? "bg-gray-200 text-gray-800 font-bold"
                  : "text-gray-700"
              }`}
            >
              <div key={index}>{conversation?.messages[0]?.text}</div>
              <div>
                <BsThreeDots />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideNav;
