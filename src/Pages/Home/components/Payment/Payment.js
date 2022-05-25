import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { Loading } from '../../../Shared/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L2r9rJavDy2cmWjYWjdlD6Qa8Ml9j4CdGxysWPYDLvjv3UQ4vphdcN99FjrBYqtH9Frsz3qmU6QF3oXMpXXveaB00erwK95D0');

export const Payment = () => {
    const [order,setOrder] = useState({});
    const {id} = useParams();
    // const {data:order,isLoading} = useQuery(['orders',id],()=>fetch(`https://infinite-escarpment-22015.herokuapp.com/order/${id}`).then(res =>res.json()));
    useEffect(()=>{
        fetch(`https://infinite-escarpment-22015.herokuapp.com/order/${id}`)
        .then(res =>res.json())
        .then(data => setOrder(data));
    },[id])
    console.log(order);
    const{product,price,quantity,totalCost,image} = order;
   
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left w-96 bg-base-100 p-8 rounded text-lg font-medium">
    <div className="avatar">
  <div className="w-24 rounded">
    <img src={image} alt='product-image' />
  </div>
</div>
      <h1 className=" font-bold">Pay for : {product}</h1>
      <p>Price : {price} /unit</p>
      <p>Quantity : {quantity}</p>
      <p className='text-primary'>Total Cost : {totalCost}</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        
      <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
      </Elements>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
