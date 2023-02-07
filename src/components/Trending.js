import React from 'react';
import { AiOutlineFire } from "react-icons/ai";
import profile from "../assests/guy.jpg";
import User from './User';

function Trending() {
  const profiles = [{ title: "Pandey Om", photo: profile },
  { title: "Pandey Om", photo: profile },
  { title: "Pandey Om", photo: profile },
  { title: "Pandey Om", photo: profile }]

  return (
    <div className='border rounded-t-[0.7rem] md:w-[30rem] '>
      <div className='flex items-center px-3 py-2 bg-gray-100 rounded-t-[0.7rem]'>
        <AiOutlineFire />
        <p className='ml-1 front-semibold'>Trending Developers</p>
      </div>
      <div className='p-4 space-y-4'>
        {profiles.map((profile) => (
          <User title={profile.title} photo={profile.photo} />
        ))}
      </div>

      <div className='px-3 py-2 border-t font-semibold'>
        <p>View More...</p>
      </div>
    </div>
  )
}

export default Trending