import FeverIcon from '@/assets/img/fever.png'
import Image from 'next/image'
import React from 'react'

export default function Item() {
    return (
        <div className='w-full py-2 hover:bg-secondary-col justify-center items-center group rounded-lg px-2 cursor-pointer my-2 '>
            <div className='flex w-full gap-x-4 items-center '>
                <Image width={60} height={60} alt='Fever img' className='bg-secondary-col group-hover:bg-[#CFE0E5]  p-2 rounded-lg ' src={FeverIcon} />
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <h2 className='text-category-btn font-semibold'>Introduction to Dua</h2>
                        <p className='text-gray-500 text-sm'>Subcategory: 11</p>
                    </div>
                    <hr  />
                    <span className='flex flex-col items-center'>
                        <h3 className='text-gray-700 font-semibold'>15</h3>
                        <p className='text-gray-500'>Duas</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
