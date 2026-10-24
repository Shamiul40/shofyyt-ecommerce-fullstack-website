import React from 'react'
import Container from './Container'
import { CiDeliveryTruck } from 'react-icons/ci'
import { IoChevronDown } from 'react-icons/io5'


export default function TopHeader() {
  return (
    <div className='bg-[#010f1c] text-gray-200'>
      <Container className='  py-1 flex justify-between items-center'>
      <p className='text-sm w-full flex  items-center px-1 md:w-auto font-medium  '> <CiDeliveryTruck className='text-2xl mr-1 text-[#ffb342]' /> express shipping on orders $450+ </p>

     <div className='hidden md:inline-flex items-center text-sm text-white'>
       <p className='flex items-center gap-x-1 border-r-[1px] border-r-gray-400'>English <IoChevronDown /></p>
     </div>
    </Container>
    </div>
  )
}
