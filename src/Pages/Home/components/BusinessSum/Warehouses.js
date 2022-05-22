import React from 'react'
import { FaUsersCog,FaTruckMoving,FaIndustry,FaWarehouse } from "react-icons/fa";
import  CountUp  from 'react-countup';


export const Warehouses = () => {
  return (
    <div>
        <div className='flex justify-center flex-col items-center shadow-md h-full p-8'>
                <div><h2 className='text-4xl'><FaWarehouse></FaWarehouse></h2></div>
                <div className='dealers'><h3 className='text-3xl font-bold'><CountUp delay={3} end={24} duration={3}></CountUp></h3></div>
                <div><p className='text-2xl font font-medium'>Warehouses</p></div>
            </div>
    </div>
  )
}
