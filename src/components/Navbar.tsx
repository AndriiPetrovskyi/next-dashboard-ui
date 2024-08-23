import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center text-xs gap-2 rounded-full ring-[1.5px] ring-gray-300 p-2">
        <Image src="/search.png" alt="search icon" width={14} height={14} />
        <input className='w-[200px] bg-transparent outline-none' placeholder='Search...'/>
      </div>
      <div className='flex items-center gap-6 w-full justify-end'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className='absolute bg-purple-500 w-5 h-5 text-white flex items-center justify-center -top-3 -right-3 rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Dou</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar