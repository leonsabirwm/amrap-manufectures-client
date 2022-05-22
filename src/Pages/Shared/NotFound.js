import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center w-96 mx-auto'>
        <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7970.jpg?t=st=1653235864~exp=1653236464~hmac=39332957dee30d67aa0031708e2150814420ed93020168587448d6ff636b2e72&w=740" alt="" />
        <button className='btn btn-primary'><Link to='/'>GO BACK</Link></button>
    </div>
  )
}
