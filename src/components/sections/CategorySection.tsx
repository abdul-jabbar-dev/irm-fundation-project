import SearchIcon from '@/assets/svg/SearchIcon'
import React from 'react'
import CategoryItems from './Categories/CategoryItems'

const CategorySection = () => {
    return (
        <div className='bg-red w-[400px] '>
            <h1 className='text-primary-text text-2xl font-semibold my-4'>
                Dua Page
            </h1>
<br />
            <div className='w-full '>
                <h2 className='w-full bg-category-btn py-[18px] text-center text-white  rounded-t-xl '>Categories</h2>

                <div className='px-3 border border-gray-200'>
                    <div className='border-gray-200 border-2 rounded-md my-3 w-full flex justify-center items-center'>
                        <span className='px-2'><SearchIcon /></span>
                        <input type="text" className='font-light rounded w-full py-2 outline-none ' placeholder='Search by Categories ' />
                    </div>
                    <CategoryItems />
                </div>
            </div>
        </div>
    )
}

export default CategorySection