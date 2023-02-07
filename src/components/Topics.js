import React from 'react'

function Topics() {

    const buttons = ["Whats's new", "Categories", "Trending", "Groups", "Meetings", "Clients"];

    return (
        <div className='w-full border-b bg-gray-100 py-2'>
            <div className='flex text-[14px] justify-center sm:justify-between sm:max-w-[70vw] lg:max-w-[50vw] mx-auto'>

                <div className='flex items-center gap-4 text-[14px]'>
                    {buttons.map((button) => <div className='hover:text-gray-600/90 cursor-pointer' key={button}>
                        {button}
                    </div>)}
                </div>

                <div className='hidden sm:flex hover:text-gray-600/90 cursor-pointer bg-white p-1 rounded-[0.4rem] px-3 font-semibold'>
                    <p>Subscribe</p>
                </div>

            </div>
        </div>
    )
}

export default Topics