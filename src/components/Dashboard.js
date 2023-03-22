import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { MdLock } from 'react-icons/md'
import { FcSalesPerformance } from 'react-icons/fc'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlineBell } from 'react-icons/ai'
import Pagination from './Pagination'
import UsersList from './UsersList'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-6 h-screen'>
        <div className='border-r-2 lg:col-span-1 md:col-span-2 col-span-3 border-gray p-2'>
            <div className='mb-[50px]'>
                <img src={process.env.PUBLIC_URL + './images/logo.png'} alt="" />
            </div>
            <div className='text-[#B0B7C3]'>
                <div className='mb-3'>
                    <span className='text-xs'>PAGES</span>
                </div>
                <div className='flex items-center mb-5'>
                    <RxDashboard className='mr-1'/>
                    <span>Dashboard</span>
                </div>
                <div className='flex items-center mb-5'>
                    <MdLock className='mr-1'/>
                    <span>Users</span>
                </div>
                <div className='flex items-center mb-5'>
                    <FcSalesPerformance className='mr-1'/>
                    <span>Sales</span>
                </div>
            </div>
        </div>
        <div className='lg:col-span-5 md:col-span-4 col-span-3 p-2s'>
            <div className='grid grid-cols-6 mb-[90px]'>
                <div className='col-span-4 relative mt-auto mb-auto'>
                    <input type="search" className="border border-[#F3F3F3] focus:shadow-md focus:ring-[#c9c8c8] focus:border-[#c9c8c8] text-sm rounded-lg block lg:w-2/4 w-full p-2.5" placeholder='Search'/>
                    <HiMagnifyingGlass className='absolute top-3 lg:right-[51%] right-[10%]'/>
                </div>
                <div className='col-span-2 flex justify-end items-center'>
                    <AiOutlineBell className='mr-4'/>
                    <img src={process.env.PUBLIC_URL + './images/user.png'} alt="" />
                </div>
            </div>
            <UsersList/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Dashboard