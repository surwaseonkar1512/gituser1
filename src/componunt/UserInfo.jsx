// UserInfo.js
import React from 'react';
import { motion } from 'framer-motion';

function UserInfo({ userData }) {
  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-tr from-[#ee9fee] to-[#878ef0] bg-blend-color-burn rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="text-center flex flex-col gap-6">
        <img
          src={userData.avatar_url}
          alt={`Avatar of ${userData.login}`}
          className="w-[50%] h-[30%] rounded-full mx-auto "
        />
        <div><h2 className="text-2xl font-semibold text-center text-black">{userData.login}</h2>
        {userData.name && <p className="text-lg font-semibold">{userData.name}</p>}
        </div><div class="border-b border-gray-300"></div>

        <div className='flex flex-row items-center justify-between font-base3'>
        <p className=" text-lg text-slate-900 flex flex-col gap-2">Public Repositories <span className=' text-sm font-extrabol text-violet-800'>{userData.public_repos}</span></p>
        <p className=" text-lg text-slate-900 flex flex-col gap-2">Public Gists <span className=' text-sm font-extrabol text-violet-800'>{userData.public_gists}</span></p>
        <p className=" text-lg text-slate-900 flex flex-col gap-2">
          Profile Created At <span className=' text-sm font-extrabol text-violet-800'>{new Date(userData.created_at).toLocaleDateString()}</span>
        </p>
        </div>
     </div>
    </motion.div>
  );
}

export default UserInfo;
