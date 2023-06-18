import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import { Message } from 'iconsax-react';

const Task = ({ title, photo, content, priority, colour, contri, comm, file }) => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-3 shadow mb-4">
      <div className="flex justify-between flex-row">
        <div className={`${colour} p-1 rounded-md`}>
          <h3 className="text-sm font-semibold">{priority}</h3>
        </div>
        <BsThreeDots className="text-gray-900" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      {photo && <img src={photo} alt="Card" className="mb-2 rounded-lg" />}
      <p>{content}</p>
      <div className="flex flex-col xl:flex-row gap-2 justify-start xl:justify-between">
        <img src={contri} alt="contri" className="w-10 h-5 md:w-16 md:h-7 rounded-full" />
        <div className="flex flex-row md:flex-col gap-1 lg:flex-row justify-start items-center">
        <div className='flex'><Message size="20" className="text-gray-500 text-xs" />
        <span className="text-gray-500 text-xs">{comm} comments</span></div>
          <div className='flex'><AiOutlineFileText size="20" className="text-gray-500 text-xs" />
          <span className="text-gray-500 text-xs">{file} files</span></div>
          
        </div>
      </div>
    </div>
  );
};

export default Task;
