import React from 'react';
import { SearchNormal1,MessageQuestion,NotificationBing,Calendar2 } from 'iconsax-react';;
const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center  m-16 gap-5 md:gap-10 mt-5'>
    <div></div>
    <div className='bg-gray-200 text-gray-400 flex flex-row p-2 rounded-md w-[12rem] md:w-[20rem] mr-5'>
    <SearchNormal1 size="20" color="#808080"/>
    <input
                  id="search"
                  className="bg-gray-200 ml-3 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 w-[10rem] md:w-[16rem] "
                  placeholder="Search for anything"
                  type="search"
                />           
    </div>

    <div className='flex flex-row gap-2 md:gap-7'>
    <Calendar2 size="32" color="#808080"/>
    <MessageQuestion size="32" color="#808080"/>
    <NotificationBing size="32" color="#808080"/>
    </div>
    <div className='flex gap-3'>
    <div className='hidden md:flex md:flex-col'>
    <p className='font-semibold text-black'>Anima Agarwal</p>
    <p className='text-gray-500'>U.P, India</p>
    </div>
    <img src='https://i.pravatar.cc/300' className='rounded-full w-10 h-10'/>

    </div>
    </div>
  );
};

export default Navbar;
