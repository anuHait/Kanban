import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaChevronDown } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { BiFilterAlt } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi';
import blue from '../assets/blue_icon.png'
import bubble from '../assets/bubble.png'
import people from '../assets/people.png'
import link from '../assets/link.png'
import {Profile2User,AddSquare,Calendar1} from 'iconsax-react';
const Header = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };
  return (
    <div className='m-8 md:m-20'>
    <div className='flex gap-10 flex-col md:flex-row justify-between'>
    <div className='flex flex-row justify-start items-center gap-3'>
    <h1 className='font-bold text-black text-[2.8rem]'>Mobile App</h1>
    <HiOutlinePencilAlt className='text-[#5030E5] bg-[#b9b9ed]  w-6 h-6 rounded-lg '/>
    <img src={link} className='w-6 h-6'/>
    </div>
    <div className='flex flex-row gap-2 justify-end items-center'>
    <AddSquare size="24" className="text-purple-800 bg-purple-300 rounded-lg -p-3"/>
        <span className='text-purple-800 font-semibold '>Invite</span>
    <img src={people} className='w-36 h-10 p-1'/>
    </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mt-12 gap-10'>
      <div className='flex flex-row gap-2 md:flex-row '>
      <button className='border-gray-400 border-2 flex flex-row p-1 gap-3 rounded-md'>
    <BiFilterAlt className='text-gray-500 mt-1'/>
    <span className='text-gray-600 font-semibold'>Filter</span>
    <FaChevronDown className='mt-1 text-gray-500'/>
    </button>
    <button onClick={handleIconClick} className='border-gray-400 border-2 flex flex-row p-1 gap-3 rounded-md'>
    <Calendar1 size="24" className='text-gray-500 font-semibold'/>
    <span className='text-gray-500 font-semibold'>Today</span>
    <FaChevronDown className='mt-1 text-gray-500'/>
  </button>
  {showCalendar && (
    <div className="absolute mt-2">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        popperPlacement="bottom-start"
        showPopperArrow={false}
      />
    </div>
  )}
      </div>

      <div className='flex flex-row gap-4'>
      <button className='border-gray-400 border-2 flex flex-row p-1 gap-1 rounded-md justify-center items-center'>
         <Profile2User className="text-gray-500"/> 
         <span className='text-gray-500 font-semibold'>Share</span>
      </button>
      <div className=' h-9 bg-gray-500 p-[0.5%]'></div>
      <img src={blue} className='w-8 h-8 rounded-md'/>
     <img src={bubble} className='w-7 h-7'/>
      </div>
      </div>
    </div>
  );
};

export default Header;
