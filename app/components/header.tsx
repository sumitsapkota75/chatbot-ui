"use client"
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCrown, FaStar } from "react-icons/fa";

const Header = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicedropdownOpen, setserviceDropdownOpen] = useState(false);

  const handleCodexHover = () => {
    setserviceDropdownOpen(true);
  };

  const handleCodexLeave = () => {
    setserviceDropdownOpen(false);
  };

  return (
    <div className='bg-gray-100 min-h-14 flex items-center justify-between p-4 shadow-lg'>
      <div 
        className='relative flex flex-row text-base items-center font-bold h-10 min-w-12 hover:bg-gray-200 hover:cursor-pointer rounded-lg p-4'
        onMouseEnter={handleCodexHover}
        onMouseLeave={handleCodexLeave}
      >
        Codex 3.5
        <MdOutlineKeyboardArrowDown color='gray' height={4} className='mx-2' />
        {servicedropdownOpen && (
          <div className='absolute left-0 top-full mt-0 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
            <div className='flex flex-col'>
              <button className='flex items-center w-full px-4 py-2 text-left hover:bg-gray-100'>
                <FaStar className='mr-2' /> Codex 4.0
              </button>
              <button className='flex items-center w-full px-4 py-2 text-left text-gray-400 cursor-not-allowed'>
                <FaCrown className='mr-2' /> Codex Pro
              </button>
            </div>
          </div>
        )}
      </div>
      {session?.user ? (
        <div className='relative'>
          <Image
            src={session?.user?.image || ""}
            alt="User Avatar"
            className='h-10 w-10 rounded-full cursor-pointer'
            onClick={() => setDropdownOpen(!dropdownOpen)}
            width={50}
            height={50}
          />
          {dropdownOpen && (
            <div className='flex items-center flex-col absolute right-0 mt-2 w-auto bg-white border border-gray-200 rounded-lg shadow-lg'>
              <>
              <button
                className='w-full text-left px-4 py-2 hover:bg-gray-100'
                onClick={() => signOut()}
              >
                Logout
              </button>
              <div className="min-h-1 w-1/2 bg-black"></div>
              <div className='px-4 py-2'>{session?.user.email}</div>
              </>
            </div>
          )}
        </div>
      ) : (
        <div className='flex items-center'>
          {/* Add any additional elements for non-authenticated users here */}
        </div>
      )}
    </div>
  );
};

export default Header;
