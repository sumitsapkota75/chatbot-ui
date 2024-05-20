import React from 'react'
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className='bg-gray-100 min-h-14 flex flex-row items-center'>
        <div className='new-conversation flex flex-col justify-center items-center mx-8 min-h-9 min-w-9 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer'><IoCreateOutline /></div>
        <div className='flex flex-row text-base items-center font-bold h-10 min-w-12 hover:bg-gray-200 hover:cursor-pointer rounded-lg p-4'>ChatGPT 3.5 <MdOutlineKeyboardArrowDown color='gray' height={4} className='mx-2'/></div>
    </div>
  )
}

export default Header