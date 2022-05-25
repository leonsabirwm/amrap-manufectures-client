import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import { ManageOrder } from './ManageOrder';

export const ManageOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    const{data:orders,isLoading,refetch} = useQuery('admin-orders',()=>{
       return fetch(`https://infinite-escarpment-22015.herokuapp.com/orders`,{
        headers: {
            'Content-Type': 'application/json',
            'authorization':`Bearer ${localStorage.getItem('access-token')}`
        }

       }).then(res=> res.json());
    })
    if(isLoading || loading){
        <Loading></Loading>
    }
  return (
    <div>
       <div className="overflow-x-scroll">
  <table className="table w-full ">
    {/* <!-- head --> */}
    <thead >
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Payment</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   { orders?.map((order,index) => <ManageOrder refetch={refetch} index={index} order={order} key={order._id}></ManageOrder>)}      
     
    </tbody>
  </table>
</div>
    </div>
  )
}
