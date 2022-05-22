import React from 'react'
import './BusinessSum.css'
import { FaUsersCog,FaTruckMoving,FaIndustry,FaWarehouse } from "react-icons/fa";

export const BusinessSum = () => {

  return (
    <div className='my-16'>
        <div><h2 className='text-4xl font-medium my-12'>We at a glance</h2></div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mx-12'>
            <div className='flex justify-center flex-col items-center shadow-md p-8'>
                <div><h2 className='text-4xl'><FaUsersCog></FaUsersCog></h2></div>
                <div className='dealers'></div>
                <div><p className='text-2xl font font-medium'>Countrywide Dealers</p></div>
            </div>
            <div className='flex justify-center flex-col items-center shadow-md'>
                <div><h2 className='text-4xl'><FaWarehouse></FaWarehouse></h2></div>
                <div className='warehouses'><h3 className="text-3xl font-bold">46</h3></div>
                <div><p className='text-2xl font font-medium'>Warehouses</p></div>
            </div>
            <div className='flex justify-center flex-col items-center shadow-md'>
                <div><h2 className='text-4xl'><FaTruckMoving></FaTruckMoving></h2></div>
                <div className='transportations'><h3 className="text-3xl font-bold">87</h3></div>
                <div><p className='text-2xl font font-medium'>Transportations</p></div>
            </div>
            <div className='flex justify-center flex-col items-center shadow-md'>
                <div><h2 className='text-4xl'><FaIndustry></FaIndustry></h2></div>
                <div className='industries'><h3 className="text-3xl font-bold">11</h3></div>
                <div><p className='text-2xl font font-medium'>Industries</p></div>
            </div>
            
        </div>
    </div>
  )
}
