import React from 'react'
import profile from "../assests/guy.jpg"

function Profile() {
    return (
        <div className="mb-4 first-letter: shadow-lg shadow-gray-300 border rounded-[1.5rem] flex flex-col items-center  xl:w-[40rem] xl:mt-4  xl:h-[13.5rem] mt-10">
            {/* Header */}
            <div className=" flex justify-center items-center py-4  rounded-t-[1.5rem] w-full border-b ">
                <img src={profile} alt="" className="w-20 h-20 rounded-full mr-3 " />
                <div className=''>
                    <p className='font-bold text-[22px]'>pandeyOm305</p>
                    <p className='text-[16px] -mt-1.5'>wanted50</p>
                </div>
            </div>

            <div className=''>
                <p className='py-1'> <spna className='text-blue-600 font-semibold mr-1'>21</spna> Groups</p>
            </div>
            <div className='border-b h-1 w-full'>
            </div>
            <div className='font-semibold'>
                <p className='py-2'><span className='text-blue-600 font-semibold mr-1'>171</span> Starred projects</p>
            </div>
        </div>
    )
}

export default Profile