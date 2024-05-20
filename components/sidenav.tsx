import React from "react";
import { IoCreateOutline } from "react-icons/io5";

const data = [
  { id: 1, title: "How are you doing?" },
  { id: 2, title: "How are you doing?" },
  { id: 3, title: "How are you doing?" },
  // Repeat data to simulate more items
];

const SideNav = () => {
  return (
    <div className="h-full w-60 bg-gray-200 p-4 overflow-y-auto">
      <div className="menu-items">
        <div className="menu-item flex flex-row mb-4 p-2 rounded hover:bg-gray-400 cursor-pointer">
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
