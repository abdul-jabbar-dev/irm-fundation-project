import BookIcon from '@/assets/svg/BookIcon'
import BookMarkIcon from '@/assets/svg/BookMarkIcon'
import BulbIcon from '@/assets/svg/BulbIcon'
import ChatIcon from '@/assets/svg/ChatIcon'
import DuaIcon from '@/assets/svg/DuaIcon'
import FeaturesIcon from '@/assets/svg/FeaturesIcon'
import HomeIcon from '@/assets/svg/HomeIcon'
import MediJarIcon from '@/assets/svg/MediJarIcon'
import SupportIcon from '@/assets/svg/SupportIcon'
import React from 'react'

export default function RootSider() {
  return (
    <div className='w-min  h-full'>
      <div className='flex flex-col justify-between items-center h-full rounded-2xl '>
        <div>
          <DuaIcon />
        </div>
        <div >
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><HomeIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><FeaturesIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><BulbIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><BookMarkIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><MediJarIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><ChatIcon /></li>
          <li className='list-none p-[10px] bg-secondary-col rounded-full my-5'><BookIcon /></li>
        </div>
        <div>
          <SupportIcon />
        </div>
      </div>
    </div>
  )
}
