"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';


const events = [
    {
        id: 1,
        title: 'Mathematics',
        time: "12:00 PM - 2:00 PM",
        description: "Addition, subtraction, division, and multiplication of integers"
    },
    {
        id: 2,
        title: 'World literature',
        time: "13:00 PM - 3:00 PM",
        description: "Adventures of Tom Sawyer and Huckleberry Finn"
    },
    {
        id: 3,
        title: 'Physical education',
        time: "14:00 PM - 4:00 PM",
        description: "High jump and long jump"
    }
]

import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-lg'>
            <Calendar locale='en-EN' onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold mt-4 mb-4'>Events</h1>
                <Image src="/moreDark.png" width={20} height={20} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(e => (
                    <div key={e.id} className="p-5 border-2 rounded-md border-gray-100 botder-t-4 odd:border-t-myBlue even:border-t-myPurple">
                        <div className='flex justify-between items-center'>
                            <h1 className='font-semibold text-gray-600'>{e.title}</h1>
                            <span className='text-xs text-gray-400'>{e.time}</span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2'>{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar