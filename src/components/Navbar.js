import React from 'react'
import logo from "../assests/github.png"
import { FiMenu } from 'react-icons/fi';
import NavBtn from './NavBtn';

function Navbar() {

  const buttons = [
    {title:"Code", arrow:true},
    {title:"Help", arrow:false},
    {title:"Collab", arrow:false},
    {title:"Plans", arrow:false}
  ];

  return (
    <div className="bg-[#24292f] fixed top-0 w-full">
    <div className="flex justify-between items-center py-1 px-4 lg:px-10 bg-[#24292f] text-white xl:w-[75vw] lg:w-[90vw] mx-auto">
        
        <div className="relative w-12 h-12 flex items-center">
            <img src={logo} className="object-cover" alt="" />
            <ul className="hidden lg:flex space-x-7 pl-10">
              {buttons.map((button)=>(
                <NavBtn title={button.title} arrow={button.arrow} key={button.title}/>
              ))}
            </ul>
        </div>

        <div className="lg:flex items-center justify-end gap-4 lg:w-full lg:max-w-[40rem] whitespace-nowrap">
            <input 
              type="search" 
              placeholder="Search"
              className="lg:w-[14rem] xl:w-[20rem] rounded-[0.25rem] p-1.5 outline-0 pl-4 text-black"
            />
            <div className="hidden lg:flex space-x-4 text-[#24292f]">
                <button className='py-1.5 px-2.5 bg-white rounded-[0.6rem] font-semibold hover:text-white hover:bg-[#24292f] duration-100 ease-out'>Log in</button>
                <button className='py-1.5 px-2.5 bg-white rounded-[0.6rem] font-semibold hover:text-white hover:bg-[#24292f] duration-100 ease-out'>Log out</button>
            </div>
        </div>
        
        <div className="lg:hidden text-[24px]">
            <FiMenu/>
        </div>

    </div>
    </div>
  )
}

export default Navbar