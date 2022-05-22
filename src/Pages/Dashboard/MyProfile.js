import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { HiPencil } from "react-icons/hi";
import { useForm } from 'react-hook-form';

export const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const onSubmit =(event,data) =>{
        event.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar placeholder  flex items-center justify-center mt-8">
  <div className="bg-neutral-focus ring ring-primary text-neutral-content rounded-full w-24">
    <span className="text-3xl text-white ">{user?.displayName.substring(0,1)}</span>
  </div>
</div> 
  <div className="card-body items-center text-center">
    <h2 className="text-2xl font-medium">{user?.displayName}</h2>
    <small>{user?.email}</small>
    <div className="card-actions my-4">
      {/* <!-- The button to open modal --> */}
   <label for="my-modal-6"  className='btn btn-circle btn-primary'><h2><HiPencil></HiPencil></h2></label>
    </div>
  </div>
</div>


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box flex flex-col items-center justify-center">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Update Profile</h3>

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full max-w-full">
    <label className="label">
    <span className="label-text">Your Phone</span>
    </label>
    <input class="input w-full input-bordered " type='number' placeholder="Your Phone" {...register("phone",{required:true})} ></input>
    <label className="label">
    <span className="label-text-alt text-red-500">{(errors.phone?.type === 'required' && "Phone text is required")}</span>
    </label>
    </div>
    <div className="form-control w-full max-w-full">
    <label className="label">
    <span className="label-text">Current Educational State</span>
    </label>
    <input class="input w-full input-bordered " placeholder="Educational State" {...register("education",{required:true})} ></input>
    <label className="label">
    <span className="label-text-alt text-red-500">{(errors.education?.type === 'required' && "Education text is required")}</span>
    </label>
    </div>
    <div className="form-control w-full max-w-full">
    <label className="label">
    <span className="label-text">LinkedIN Profile</span>
    </label>
    <input class="input w-full input-bordered " placeholder="Profile URL" {...register("linkdin",{required:true})} ></input>
    <label className="label">
    <span className="label-text-alt text-red-500">{(errors.linkdin?.type === 'required' && "LinkdIN profile is required")}</span>
    </label>
    </div>
    <div className="form-control w-full max-w-full">
    <label className="label">
    <span className="label-text">Your Address</span>
    </label>
    <textarea className="textarea h-24 w-80 textarea-primary" placeholder="Type your review here" {...register("address",{required:true,maxLength:80})} ></textarea>
    <label className="label">
    <span className="label-text-alt text-red-500">{(errors.address?.type === 'required' && "Address is required")||(errors.address?.type==='maxLength' && "Max length of address is 80 character")}</span>
  </label>
    </div>
    <div>
        <button className='btn btn-primary btn-outline'>Update</button>
    </div>
    </form>

    
  </div>
</div>
    </div>
    
  )
}
