import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import './purchase.css'

export const Purchase = () => {
    const [orderItem,setOrderItem] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const [valid,setValid]=useState(true);
    const { register, formState: { errors }, handleSubmit,reset,watch } = useForm();
    const id = useParams().id;
    useEffect(()=>{
        fetch(`https://infinite-escarpment-22015.herokuapp.com/parts/${id}`)
        .then(res => res.json())
        .then(data => setOrderItem(data));
    },[])
      const navigate = useNavigate();
      const{image,name,description,price,available,minimun}=orderItem;
    //   setValid(watch('quantity'))
    const validAmount = watch('quantity');
      console.log(typeof validAmount);
      useEffect(()=>{
        if(((parseInt(validAmount))<parseInt(minimun))||(parseInt(validAmount))>parseInt(available)){
            setValid(false);
              
          }
          else{
              setValid(true);
          }
      },[validAmount])
      
      const onSubmit = (data,event) =>{
        event.preventDefault();
        const newAvailable = parseInt(available) - parseInt(data.quantity);
        const total = parseInt(price) * parseInt(data.quantity);
        const order = {
            product:name,
            price,
            image,
            quantity:data.quantity,
            totalCost : total.toString(),
            client:user.displayName,
            email:user.email,
            phone:data.phone,
            postCode:data.postCode,
            address:data.address   
        }
        if((parseInt(data.quantity) > parseInt(available)) || (parseInt(data.quantity) < parseInt(minimun))){
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...Invalid Quantity',
                text: 'Please insert a quantity between available and minimum order quantity',
                
                confirmButtonColor: '#09aee6',
                
              })
              return;
        }
        else{
            axios.post('https://infinite-escarpment-22015.herokuapp.com/orders',order)
            .then((response) => {
                axios.patch(`https://infinite-escarpment-22015.herokuapp.com/orders/${id}`,{available:newAvailable.toString()}).then((response) => {
                    console.log('patch',response);
                  }, (error) => {
                    console.log(error);
                  });
                console.log(response);
                
                    toast.success(`Order Placed!!
                    ID:${response.data.insertedId}`)
                    reset();
                    navigate('/');
                
              }, (error) => {
                console.log(error);
              });
        }
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
    <div>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-xs rounded-lg shadow-2xl" />
   <div className='flex justify-center items-center flex-col lg:ml-36'>
   <div className='grid grid-cols-2 gap-4  text-lg font-medium'>
        <div>
            <h1 className='p-12 rounded shadow-md bg-white'>{name}</h1>
        </div>
        <div><h2 className='p-12 rounded shadow-md bg-white'>Price : ${price}/unit</h2></div>
        <div className=''><h2 className='p-12 shadow-md bg-white'>Avaliable Quantity : {available}</h2></div>
        <div className=''><h2 className='p-12 rounded shadow-md bg-white'>Min Order Quantity : {minimun}</h2></div>
        </div>
        {/* description section */}
        <div className='text-xl text-justify my-12 shadow-md p-12'>
            <h2 className='text-center text-2xl font-medium'>Desciption</h2>
            <p>{description}</p>
        </div>
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
  <input type="number" name='quantity' placeholder='Insert Quantity' className="input input-bordered w-full max-w-xs" {...register("quantity",{ required: true })} />
   
  <label className="label">
    <span className="label-text-alt text-red-500">{(errors.quantity?.type === 'required' && "Quantity is required")||(!valid && "Insert a quantity between min and available")}</span>
  </label>
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
      <button disabled={!valid} className="btn btn-primary w-full" type='submit'>Place Order</button>
    </div>
    </form>
  </div>
</div>
    </div>
    </div>
  )
}
