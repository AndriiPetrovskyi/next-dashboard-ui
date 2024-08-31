import React from 'react'

const Announcements = () => {
    
  return (
    <div className='bg-white p-4 rounded-lg'>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold mt-4 mb-4'>Announcements</h1>    
            <span className='text-xs text-gray-400'>View all</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-lightBlue rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Charity evening</h2>
                    <span className='text-sm text-gray-400 bg-white px-2 py-1 rounded-md'>2025-10-24</span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>Charity evening on the occasion of the admission of new students to our school</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-myLightPurple rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Reunion of graduates</h2>
                    <span className='text-sm text-gray-400 bg-white px-2 py-1 rounded-md'>2025-10-24</span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>Reunion of the 1996 graduates of our school </p>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-myLightYellow rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Holiday concert</h2>
                    <span className='text-sm text-gray-400 bg-white px-2 py-1 rounded-md'>2025-10-24</span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>Concert in honor of Independence Day</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements;