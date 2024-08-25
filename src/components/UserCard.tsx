import Image from 'next/image';
import React from 'react'

const UserCard = ({ type }: {type:string}) => {
  return (
    <div className='odd:bg-myPurple even:bg-myYellow flex-1 min-w-[130] rounded-2xl p-4'>
        <div className='flex justify-between'>
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/08</span>
            <Image src="/more.png" width={20} height={10} alt="" /> 
        </div>
        <h1 className='text=2xl font-semibold my-4'>1.234</h1>
        <h2 className='capitalize'>{type}</h2>
    </div>
  )
}

export default UserCard;