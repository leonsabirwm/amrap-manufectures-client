import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { HiPencil } from "react-icons/hi";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { async } from '@firebase/util';

export const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profile,setProfile] = useState({});
  const [updateModal,setUpdateModal] = useState(false);
  const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const email = user?.email;
    
    const {phone,education,address,linkdin} = profile;
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
            // console.log(data);
        });
        
    },[user])

   

    const onSubmit =(data,event) =>{
        event.preventDefault();
        console.log(data);
        const updation = {
            
            phone:data.phone,
            address:data.address,
            linkdin:data.linkdin,
            education:data.education
        }
        setUpdateModal(false);

        axios.patch(`http://localhost:5000/users/update/${email}`,updation)
        .then((response) => {
            reset();
            console.log(response);
            if(response?.data?.upsertedCount ||response?.data?.modifiedCount){
                toast.success("Profile Updated")
            }
            if(!response?.data?.upsertedCount && !response?.data?.modifiedCount){
                toast.info("Profile is already up to date");

            }
          }, (error) => {
              toast.error("Something Went Wrong")

            console.log(error);
          });
    }
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar placeholder  flex items-center justify-center mt-8">
  <div className="bg-neutral-focus ring ring-primary text-neutral-content rounded-full w-24">
    <span className="text-3xl text-white capitalize ">{user?.displayName.substring(0,1)}</span>
  </div>
</div> 
  <div className="card-body items-center text-center">
    <h2 className="text-2xl font-medium capitalize">{user?.displayName}</h2>
    <small>{user?.email}</small>
    <small>{phone}</small>
   <div className='flex flex-col items-left justify-left'>
   <div className=' text-left mt-4'>
        <small className='font-medium'>Education:</small>
        <p>{education}</p>
    </div>
    <div className='text-left'>
        <small className='font-medium'>Address:</small>
        <p>{address}</p>
    </div>
    <div className='text-left'>
        <small className='font-medium'>LinkdIN:</small>
       <a className='text-primary' rel="noreferrer" target="_blank" href={linkdin}> <p>{linkdin}</p></a>
    </div>
   </div>
    <div className="card-actions my-4">
      {/* <!-- The button to open modal --> */}
   <label htmlFor="my-modal-6" onClick={()=>setUpdateModal(true)}  className='btn btn-circle btn-primary'><h2><HiPencil></HiPencil></h2></label>
    </div>
  </div>
</div>


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />


{
    updateModal?<div className="modal modal-bottom sm:modal-middle">
    <div className="modal-box flex flex-col items-center justify-center">
    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 className="font-bold text-lg">Update Profile</h3>
  
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Your Phone</span>
      </label>
      <input className="input w-full input-bordered " type='number' placeholder="Your Phone" {...register("phone",{required:true})} ></input>
      <label className="label">
      <span className="label-text">Current : {phone}</span>

      <span className="label-text-alt text-red-500">{(errors.phone?.type === 'required' && "Phone text is required")}</span>
      </label>
      </div>
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Current Educational State</span>

      </label>
      <input className="input w-full input-bordered " placeholder="Educational State" {...register("education",{required:true})} ></input>
      <label className="label">
      <span className="label-text">Current : {education}</span>
      <span className="label-text-alt text-red-500">{(errors.education?.type === 'required' && "Education text is required")}</span>
      </label>
      </div>
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">LinkedIN Profile</span>

      </label>
      <input className="input w-full input-bordered " placeholder="Profile URL" {...register("linkdin",{required:true,pattern:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/})} ></input>
      <label className="label">
      <span className="label-text">Current : {linkdin}</span>
      <span className="label-text-alt text-red-500">{(errors.linkdin?.type === 'required' && "LinkdIN profile is required")||(errors.linkdin?.type === 'pattern' && "Insert a valid profile link")}</span>
      </label>
      </div>
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Your Address</span>
      </label>
      <textarea className="textarea h-24 w-80 textarea-primary" placeholder="Type your address here" {...register("address",{required:true,maxLength:80})} ></textarea>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.address?.type === 'required' && "Address is required")||(errors.address?.type==='maxLength' && "Max length of address is 80 character")}</span>
    </label>
      </div>
      <div>
          <button className='btn btn-primary btn-outline'>Update</button>
      
      </div>
  
      </form>
  
      
    </div>
  </div>:''
}
    </div>
    
  )
}
