import React from 'react'
import './Banner.css'

export const Banner = () => {
  return (
    <div className=''>
        <div className='banner-container grid grid-cols-1 lg:grid-cols-2 h-screen mb-16'>
            <div className=''></div>
            <div className='text-left font-medium flex flex-col justify-center items-left text-white bg-gray-800/[.8] px-12'>
                <h1 className=' text-4xl lg:text-7xl'>Build Your Gym Equipment Business With Us</h1>
                <div className='my-8'>
                <button className='btn btn-outline w-36  btn-primary'>Contact Us</button>
                </div>
            </div>
          
        </div>

    </div>
  )
}
