import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import './purchase.css'

export const Purchase = () => {
    
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const id = useParams().id;
    const {data,isLoading} = useQuery('parts',()=>{
        return  axios.get(`http://localhost:5000/parts/${id}`);
      })
      const orderItem = data?.data;
      const{image,name,description,price,available,minimun}=orderItem;
      console.log(orderItem);
    const onSubmit = (data,event) =>{
        event.preventDefault();
        if((data.quantity > available) || (data.quantity < minimun)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...Invalid Quantity',
                text: 'Please insert a quantity between available and minimum order quantity',
                
                confirmButtonColor: '#09aee6',
                
              })
        }
        // console.log(data);
        if(isLoading){
            return <Loading></Loading>
        }
    }
  return (
    <div>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-xs rounded-lg shadow-2xl" />
    <div className='grid grid-cols-2 gap-4 lg:ml-36 text-lg font-medium'>
    
     <div>
         <h1 className='p-12 rounded shadow-md bg-white'>{name}</h1>
     </div>
     <div><h2 className='p-12 rounded shadow-md bg-white'>Price : ${price}/unit</h2></div>
     <div><h2 className='p-12 shadow-md bg-white'>Avaliable Quantity : {available}</h2></div>
     <div><h2 className='p-12 rounded shadow-md bg-white'>Min Order Quantity : {minimun}</h2></div>
    </div>
  </div>
</div>

        
        <div className='flex justify-center items-center my-16'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
 <h3 className='text-2xl font-bold'>Proceed Order</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <input type="text" disabled value={user.displayName} className="input input-bordered w-full max-w-xs"{...register("name")}  />
  
</div>

    
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input type="text" disabled value={user.email} className="input input-bordered w-full max-w-xs" {...register("email")} />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Quantity</span>
  </label>
  <input type="number" placeholder='Insert Quantity' className="input input-bordered w-full max-w-xs" {...register("quantity")} />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Phone</span>
  </label>
  <input {...register("phone", { required: true })} placeholder='Enter Phone Number' type="number" className="input input-bordered w-full max-w-xs" {...register("phone")} />
  <label className="label">
    <span className="label-text-alt text-red-500">{errors.phone?.type === 'required' && "Phone is required"}</span>
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Post Code</span>
  </label>
  <input {...register("postCode", { required: true })} placeholder='Enter Post Code' type="number" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt text-red-500">{errors.postCode?.type === 'required' && "Post Code is required"}</span>
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Address</span>
  </label>
  <textarea {...register("address", { required: true })} className="textarea textarea-primary" placeholder="Your Address"></textarea>
  <label className="label">
    <span className="label-text-alt text-red-500">{errors.address?.type === 'required' && "Address is required"}</span>
  </label>
</div>

    <div className="card-actions flex justify-center mt-4">
      <button className="btn btn-primary w-full" type='submit'>Place Order</button>
    </div>
    </form>
  </div>
</div>
    </div>
    </div>
  )
}
