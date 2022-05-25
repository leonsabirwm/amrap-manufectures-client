import React from 'react'
import { IoNavigate } from "react-icons/io5";

export const DlearshipStore = () => {
  return (
    <div className='my-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex items-center justify-center'>
                <img src="https://img.freepik.com/free-vector/internet-order-delivery-tracking-gps-navigator-service-website-flat-design-element-pointer-magnifier-map-route-online-planning-path-finding-concept-illustration_335657-1688.jpg?size=338&ext=jpg&uid=R71728637&ga=GA1.2.1617678331.1651665780" alt="" />
            </div>

        <div>
            <div className='text-left px-16'>
                <h1 className="lg:text-6xl text-3xl text-left">Find Our Dealership Stores</h1>
                <p className='text-left my-8 text-lg'>
                It's commonly believed good location is the key element to attracting customers. A well-located store also makes supply and distribution easier. Location can influence a retailer's ability to market itself, and to deal with the competition it faces from other businesses.
                </p>
                <button className='btn btn-primary text-white'><IoNavigate></IoNavigate><span className='ml-2'>Navigate</span> </button>
            </div>

        </div>
        </div>
    </div>
  )
}
