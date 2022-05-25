import React from 'react'
import './BusinessSum.css'
import { FaUsersCog,FaTruckMoving,FaIndustry,FaWarehouse } from "react-icons/fa";
import CountUp from 'react-countup';
import { Dealers } from './Dealers';
import { Warehouses } from './Warehouses';
import { Industries } from './Industries';
import { Transportation } from '../Transportation';

export const BusinessSum = () => {

  return (
    <div className='my-16'>
        <div><h2 className='text-4xl font-medium my-12'>We at a Glance</h2></div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mx-12'>
        <Dealers></Dealers>
       <Warehouses></Warehouses>
       <Industries></Industries>
       <Transportation></Transportation>
            </div>
    </div>
  )
}
