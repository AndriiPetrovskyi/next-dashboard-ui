"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: '#fff',
  },
  {
    name: 'Girls',
    count: 60,
    fill: '#C3EBFA',
  },
  {
    name: 'Boys',
    count: 56,
    fill: '#FAE27C',
  }
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" width={20} height={20} alt="" />
        </div>
        <div className='relative w-full h-[75%]'>
          <ResponsiveContainer>
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="40%" 
              outerRadius="99%" 
              barSize={100} 
              data={data}
            >
              <RadialBar
                background
                dataKey="count"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <Image src="/maleFemale.png" height={50} width={50} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
        <div>
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 rounded-full bg-myBlue' />
                    <h1 className='font-bold'>1.234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 rounded-full bg-myYellow' />
                    <h1 className='font-bold'>1.115</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountChart