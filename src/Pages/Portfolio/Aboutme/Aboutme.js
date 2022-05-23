import React from 'react'

export const Aboutme = () => {
  return (
   <div className='flex justify-center items-center my-24'>
       <div className="card w-96 bg-base-100 shadow-2xl overflow-visible">
       <div className="avatar flex justify-center items-center mt-8">
  <div className="w-24 -mt-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/ZTCDhnP/PSFix-20210918-194421.jpg" />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Leon Sabir</h2>
    <p className='font-medium'>leonsabir9@gmail.com</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
   </div>
  )
}
