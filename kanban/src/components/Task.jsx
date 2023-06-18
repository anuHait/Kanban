import React from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineFileText} from 'react-icons/ai'
import {Message} from 'iconsax-react'
const Task = ({ title, photo, content,priority,colour ,contri}) => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-3 shadow mb-4">

    <div className='flex justify-between flex-row '>
    <div className={`${colour} p-1 rounded-md`}>
    <h3 className="text-sm font-semibold ">{priority}</h3>
    </div>
      <BsThreeDots className='text-gray-900'/>
    </div>
    <h3 className="text-xl font-bold ">{title}</h3>

      {photo && <img src={photo} alt="Card" className="mb-2" />}
      <p>{content}</p>
    <div className='flex justify-between '>
    <img src={contri} alt="contri" className='w-16 h-7 rounded-full' />
    <div className='flex flex-row gap-2'>
    <Message size="24" className="text-gray-500"/> comments
    <AiOutlineFileText size="24" className="text-gray-500"/> files
    </div>
    </div>
    </div>
  );
};

export default Task;
