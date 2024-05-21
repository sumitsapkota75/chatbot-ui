"use client"
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='bg-gray-100 min-h-14 flex items-center justify-between p-4'>
      <Link href="/home">
        <div className='new-conversation flex flex-col justify-center items-center mx-4 min-h-9 min-w-9 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer'>
          <IoCreateOutline />
        </div>
      </Link>
      <div className='flex flex-row text-base items-center font-bold h-10 min-w-12 hover:bg-gray-200 hover:cursor-pointer rounded-lg p-4'>
        ChatGPT 3.5
        <MdOutlineKeyboardArrowDown color='gray' height={4} className='mx-2' />
      </div>
      {session?.user ? (
        <div className='relative'>
          <Image
            src={session?.user?.image|| ""}
            alt="User Avatar"
            className='h-10 w-10 rounded-full cursor-pointer'
            onClick={handleAvatarClick}
            width={50}
            height={50}
          />
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg'>
              <button
                className='w-full text-left px-4 py-2 hover:bg-gray-100'
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='flex items-center'>
          
        </div>
      )}
    </div>
  );
};

export default Header;
