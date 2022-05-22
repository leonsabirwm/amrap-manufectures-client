import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import { MyOrder } from './MyOrder';

export const MyOrders = ({}) => {
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    const{data:orders,isLoading,refetch} = useQuery('my-orders',()=>{
       return fetch(`http://localhost:5000/orders/${email}`).then(res=> res.json());
    })
    if(isLoading || loading){
        <Loading></Loading>
    }
  return (
    <div>
       <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Total Price</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   { orders?.map((order,index) => <MyOrder refetch={refetch} index={index} order={order} key={order._id}></MyOrder>)}      
     
    </tbody>
  </table>
</div>
    </div>
  )
}
