import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';
export const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        ,
        ,
        ,
      ] = useSignInWithEmailAndPassword(auth);
    console.log(errors);
    const [user, loading, error] = useAuthState(auth);
    const onSubmit = (data,event)=>{
        event.preventDefault();
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
        reset()
    }
    const[token] = useToken(user || gUser);
    useEffect(()=>{
        if(token){
            navigate('/');
        }
    })
    if(loading || gLoading){
        return <Loading></Loading>
    }
  return (
    <div className='flex justify-center items-center my-8'>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
 <h3 className='text-2xl font-bold'>Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

    
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" {...register("email")} />
 
</div>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Password</span>
  </label>
  <input type="text" placeholder="Enter your password" class="input input-bordered w-full max-w-xs"{...register("password")}  />
  
</div>
    <div class="card-actions flex justify-center mt-4">
      <button class="btn btn-primary w-full" type='submit'>Login</button>
    </div>
    </form>
    <div>
        <p className='mt-2'>New to AMRAP? <Link className='text-primary font-medium' to='/signup'>Sign Up</Link></p>
    </div>
  <div class="divider text-xl">OR</div>

    <div class="card-actions flex justify-center">
      <button onClick={()=>signInWithGoogle()} class="btn btn-outline btn-primary w-full" type='submit'>Continue With Google</button>
    </div>
  </div>
</div>
    </div>
  )
}
