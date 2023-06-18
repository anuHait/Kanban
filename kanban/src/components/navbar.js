import React from 'react';
import { useState } from 'react';
import { SearchNormal1,MessageQuestion,NotificationBing,Calendar2 } from 'iconsax-react';
import woman from "../assets/woman.jpg"
const Navbar = () => {
  const[show,setShow]=useState(false)
  return (
    <div className='bg-white flex justify-between items-center  m-16 gap-5 md:gap-10 mt-5'>
    <div></div>
    <div className='bg-gray-200 text-gray-400 flex flex-row p-2 rounded-md w-[10rem] md:w-[20rem] mr-5'>
    <SearchNormal1 size="20" color="#808080"/>
    <input
                  id="search"
                  className="bg-gray-200 ml-3 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 w-[7rem] md:w-[16rem] "
                  placeholder="Search for anything"
                  type="search"
                />           
    </div>

    <div className='lg:flex hidden lg:flex-row gap-2 md:gap-7'>
    <Calendar2 size="24" color="#808080"/>
    <MessageQuestion size="24" color="#808080"/>
    <NotificationBing size="24" color="#808080"/>
    </div>
    <div className='flex gap-3'>
    <div className='hidden md:flex md:flex-col'>
    <p className='font-semibold text-black'>Anima Agarwal</p>
    <p className='text-gray-500'>U.P, India</p>
    </div>
    <img src={woman} className='rounded-full w-10 h-10' onClick={()=>{setShow(!show)}}/>
    {show && <div className='absolute top-16 right-0 bg-white rounded-md shadow-md p-5 flex flex-col'>
    <div className='flex flex-row gap-1'>
    <p className='font-semibold text-black'>Anima Agarwal</p>
    <p className='text-gray-500'>U.P, India</p>
    <Calendar2 size="24" color="#808080"/>
    <MessageQuestion size="24" color="#808080"/>
    <NotificationBing size="24" color="#808080"/>
    </div>
    </div>}
    </div>
    </div>
  );
};

export default Navbar;
