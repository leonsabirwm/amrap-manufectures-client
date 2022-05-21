import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Part = ({part}) => {
    const navigate = useNavigate();

    const{image,name,description,price,available,minimun}=part;
  return (
    <div>
        <div className="card w-max-md bg-base-100 shadow-xl">
  <figure><img className='h-76' src={image} alt="Shoes" /></figure>
  <div className="px-12 py-4">
    <h2 className="card-title">
      {name}
    </h2>
    <p className='text-justify  text-gray-500 text-sm'>{description}</p>
  </div>
  <div className=''>
      <button onClick={()=>navigate(`/parts/purchase/${part._id}`)} className='btn btn-outline btn-primary my-4'>Place Order</button>
  </div>
  <div className='flex justify-around bg-primary'>
      <div className='flex items-center justify-center flex-col px-2 lg:px-8 py-4 font-medium'>
          <h3 className=' text-2xl'>${price}</h3>
          <p  className='text-sm'>Price/Unit</p>
      </div>
      <div className='flex items-center justify-center flex-col py-4 font-medium border-x-2 px-4 lg:px-12'>
          <h3 className=' text-2xl'>{available}</h3>
          <p  className='text-sm'>Avaliable Quantity</p>
      </div>
      <div className='flex items-center justify-center flex-col px-2 lg:px-8 py-4 font-medium'>
          <h3 className=' text-2xl'>{minimun}</h3>
          <p  className='text-sm'>Min q/order</p>
      </div>
     
  </div>
</div>
    </div>
  )
}
