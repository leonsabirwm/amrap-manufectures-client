import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

export const AddReview = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = (data,event)=>{
        event.preventDefault();
        console.log(data);
        const review = {
            name:user.displayName,
            email:user.email,
            review:data.review,
            rating:data.rating,
        }
        axios.post('http://localhost:5000/reviews',review)
        .then((response) => {
            toast.success("Review Added!!")
            reset();
          }, (error) => {
            console.log(error);
          });

    }
  return (
    <div className=''>
        <div className="card w-96 bg-base-100 shadow-xl my-12">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title">Add a review</h2>
      
    <form onSubmit={handleSubmit(onSubmit)}>

    
    <div className="form-control w-full max-w-full">
    <label className="label">
    <span className="label-text">Your Review</span>
    </label>
    <textarea className="textarea h-56 w-80 textarea-primary" placeholder="Type your review here" {...register("review",{required:true,maxLength:140})} ></textarea>
    <label className="label">
    <span className="label-text-alt text-red-500">{(errors.review?.type === 'required' && "Review text is required")||(errors.review?.type==='maxLength' && "Max length of review is 140 character")}</span>
  </label>
    <div className="rating my-4 flex flex-col">
    <label className="label">
    <span className="label-text">Please select a rating</span>
    </label>
    
    <div className='text-left'>
  <input type="radio" value='1' name="rating" {...register("rating",{required:true})} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" value='2' name="rating" {...register("rating")} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" value='3' name="rating" {...register("rating")} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" value='4' name="rating" {...register("rating")} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" value='5' name="rating" {...register("rating")} className="mask mask-star-2 bg-orange-400" />
  <label className="label">
    <span className="label-text-alt text-red-500">{(errors.rating?.type === 'required' && "Rating is required")}</span>
  </label>
    </div>
  
</div>
    <div className="card-actions mt-2">
      <button type='submit' className="btn btn-primary">POST</button>
    </div>

    </div>
    </form>
  </div>
</div>
    </div>
  )
}
