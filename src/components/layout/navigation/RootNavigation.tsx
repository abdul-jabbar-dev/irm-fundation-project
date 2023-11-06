import React from 'react' 
import RootSider from '../bar/RootSider'
import CategorySection from '@/components/sections/CategorySection'

export default function RootNavigation({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <div className=' bg-white rounded-2xl flex h-[100vh] gap-x-4'>
                <div className=' h-full py-12 flex gap-x-6'>
                    <RootSider />
                    <CategorySection/>
                </div>

                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}
