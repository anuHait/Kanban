import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaChevronDown } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { BiFilterAlt } from 'react-icons/bi'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import plus from '../assets/plus.png'
import { HiOutlinePencilAlt } from 'react-icons/hi';
import blue from '../assets/blue_icon.png'
import bubble from '../assets/bubble.png'
import people from '../assets/people.png'
import link from '../assets/link.png'
import {Profile2User,AddSquare} from 'iconsax-react';
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
    <HiOutlinePencilAlt className='text-[#5030E5] bg-[#b9b9ed]  w-6 h-6 rounded-lg'/>
    <img src={link} className='w-6 h-6'/>
    </div>
    <div className='flex flex-row gap-2 justify-end items-center'>
    <AddSquare size="24" className="text-purple-800"/>
        <span className='text-purple-800 font-semibold'>Invite</span>
    <img src={people} className='w-36 h-10 p-1'/>
    </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mt-12 gap-10'>
      <div className='flex flex-row gap-2 md:flex-row '>
      <button className='border-gray-500 border-2 flex flex-row p-1 gap-3 rounded-md'>
    <BiFilterAlt className='text-gray-500 mt-1'/>
    Filter
    <FaChevronDown className='mt-1 text-gray-500'/>
    </button>
    <button onClick={handleIconClick} className='border-gray-500 border-2 flex flex-row p-1 gap-3 rounded-md'>
    <div className='mt-2'><svg width="13" height="13" viewBox="0 0 20 20" fill="#808080" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="black"/>
    </svg></div>
    Today
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
      <button className='border-gray-500 border-2 flex flex-row p-1 gap-1 rounded-md justify-center items-center'>
         <Profile2User className="text-gray-500"/> Share
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
