import axios from 'axios';
import React, { useState } from 'react'
import { Product } from './Product';
import { useQuery } from 'react-query';

export const ManageProducts = () => {
    const {data:products,refetch} = useQuery('all-products',()=>axios.get('https://infinite-escarpment-22015.herokuapp.com/parts'))
  return (
       <div className="overflow-x-auto">
    <div>
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th>Index</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Available</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            products?.data.map((product,index) => <Product index={index} refetch={refetch} product={product} key={index}></Product>)
        }
    </tbody>
  </table>
</div>
    </div>
  )
}
