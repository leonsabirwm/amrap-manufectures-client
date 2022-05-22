import React from 'react'
import { FaStar } from "react-icons/fa";

export const ReviewCard = ({review}) => {
    const{name,email,rating} = review;
  return (
    <div>
       
        <div className="card h-full w-96 bg-base-100 shadow-xl">
  <div className="card-body flex flex-row justify-left items-center" >
  <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full h-16 w-16">
    <span className='text-xl text-primary capitalize'>{name.substring(0,1)}</span>
   </div>
   </div> 
   <div className='ml-4'>
   <h2 className="card-title capitalize">{name}</h2>
    <small>{email}</small>
   </div>
   
  </div>

  <div className='text-justify p-8'>
      <div className='flex justify-left items-center flex-row'>
          <p className='font-bold'>Rating : {rating}</p>
          <small className='ml-1 text-orange-400'><FaStar></FaStar></small>
          </div>
      <p className='text-gray-500'>{review?.review}</p>
  </div>
</div>
    </div>
  )
}
