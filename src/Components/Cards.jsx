import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { MdLocationPin, MdPayments, MdCalendarMonth } from 'react-icons/md'
const Cards = ({ data }) => {
  return (
    <div className=' py-2 px-4 w-[290px] rounded-lg shadow-xl border-[1px] border-gray-600 mb-4 '>
      <h1 className='text-center text-xl font-semibold mb-2 text-[#2554C7]'>{data.position}</h1>
      <div className='flex items-center justify-start gap-4 py-1'>
        <span>{<FaGraduationCap />}</span>
        <span>{data.experience}</span>
      </div>
      <div className='flex items-center justify-start gap-4 py-1'>
        <span>{<MdPayments />}</span>
        <span>{data.salary} LPA</span>
      </div>
      <div className='flex items-center justify-start gap-4 py-1'>
        <span>{<MdLocationPin />}</span>
        <span>{data.location}</span>
      </div>
      <div className='flex items-center justify-start gap-4 py-1'>
        <span>{<MdCalendarMonth />}</span>
        <span>{data.date}</span>
      </div>
      <div className='pt-2 flex justify-center'>
        <button className='bg-green-700 w-[40%] text-stone-50 px-2 py-1 rounded-md hover:bg-green-900'>Apply</button>
      </div>
      
      
    </div>
  )
}

export default Cards