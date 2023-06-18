import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {BsThreeDots} from 'react-icons/bs'
  import { TaskSquare,Element3,Setting2,Message,Profile2User ,ArrowRight2} from 'iconsax-react'  ;
  import purple from "../assets/purple_icon.png";
  import bulb from "../assets/bulb.png";
const Sidebar = () => {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="fixed top-4 left-0 inline-flex items-center peer justify-center rounded-md p-2 text-gray-500 hover:bg-[#E6E6FA] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r-2 border-[#DBDBDB]">
          <div className="flex flex-col justify-start item-center gap-1">
          <div className='flex border-b-2 gap-3 border-[#DBDBDB]'>
          <img src={purple} alt="logo" className="w-7 h-7" />
          <h1 className="text-lg text-left cursor-pointer font-bold text-gray-900  pb-2 w-full ">
            Project M.
          </h1>
          
          <ArrowRight2 size="24" className="text-gray-700 font-semibold"/>
          
          

          </div>
           
            <div className=" my-4 border-b-2 border-[#DBDBDB] ">
              <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Element3 size="24" className="text-2xl text-[#787486] group-hover:text-gray-900 " />
                <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                  Home
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Message size="24" className="text-2xl text-[#787486] group-hover:text-gray-900 " />                
              <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                  Message
                </h3>
              </div>
             
              <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <TaskSquare size="24" className="text-2xl text-[#787486] group-hover:text-gray-900 " />
               <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                  Tasks
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Profile2User size="24" className="text-2xl text-[#787486] group-hover:text-gray-900 " />                
              <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                    Members
                </h3>
              </div>
              <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Setting2 size="24" className="text-2xl text-[#787486] group-hover:text-gray-900 "/>              
              <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                Settings
              </h3>
            </div>
            </div>
            {/*new section */}
            <div className="flex flex-col justify-start item-center">
            <div className=" ">
            <h1 className='text-md text-[#787486] group-hover:text-gray-900 font-semibold text-left'>MY PROJECTS</h1>
              <div className="flex mb-1 justify-start items-center gap-2 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <div className='w-2 h-2 p-1 rounded-full bg-green-300'></div>
                <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold mr-5 ">
                  Moblie App
                </h3>
                <BsThreeDots className="text-2xl text-[#787486] group-hover:text-gray-900 " />
              </div>
              <div className="flex mb-1 justify-start items-center gap-2 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <div className='w-2 h-2 p-1 rounded-full bg-orange-500'></div>
                <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold mr-5 whitespace-nowrap">
                  Website Redesign
                </h3>
              </div>
             
              <div className="flex  mb-1 justify-start items-center gap-2 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <div className='w-2 h-2 p-1 rounded-full bg-[#b9b9ec]'></div>
              <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                  Design System
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-2 pl-5 hover:bg-[#E6E6FA] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <div className='w-2 h-2 p-1 rounded-full bg-blue-400'></div>

                <h3 className="text-base text-[#787486] group-hover:text-gray-900 font-semibold ">
                    Wireframes
                </h3>
              </div>
              
            </div>
            </div>
            {/* logout */}
            
            <div class="rounded-xl shadow-xl bg-gray-200 h-48">
            <div class="flex justify-center p-1">
              <div class="flex justify-center mt-[-25px] ">
                <img src={bulb} className="border-4  rounded-full w-8 h-8 mt-2 mx-auto shadow-lg" alt="mem1"/>
              </div>
            </div>
            <div class="p-2 ">
              <h5 class="text-md text-center text-black font-bold mb-1">Thoughts time</h5>
              <p class="mb-1 text-center text-gray-800 text-sm">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
              <div className='font-semibold text-black bg-white mb-2 rounded-lg m-3 text-center'>Write a message</div>
            </div>
          </div>
            </div>
         
        </div>
      </Disclosure>
    </div>
  )
}

export default Sidebar
