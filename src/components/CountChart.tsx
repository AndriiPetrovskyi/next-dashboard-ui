"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-[450px] p-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" width={20} height={20} alt="" />
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
        <div className='w-full h-[75%]'>
            kjuhkjhdskjfhskjdhf
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        dataKey="uv"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>
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