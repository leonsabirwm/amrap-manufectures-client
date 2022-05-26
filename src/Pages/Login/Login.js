import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Loading } from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';
export const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [generalError,setGeneralError] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    console.log(errors);
    const [user, loading] = useAuthState(auth);
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
            setGeneralError('');
        }
    })
    useEffect(()=>{
        if(error||gError){
            console.log(error?.code||gError);
            if(error?.code === 'auth/user-not-found'){
                setGeneralError(`User Not Found!!`);
            }
            if(error?.code ==='auth/wrong-password'){
                setGeneralError("Wrong Password!!")
            }
            if(!(error?.code === 'auth/user-not-found'||'auth/wrong-password')){
                setGeneralError('Somthing Went Wrong!!')
            }
        }
       },[error,gError]);
    if(loading || gLoading){
        return <Loading></Loading>
    }
  
  return (
    <div className='flex justify-center items-center my-8'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
 <h3 className='text-2xl font-bold'>Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

    
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" {...register("email")} />
 
</div>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Password</span>
  </label>
  <input type="text" placeholder="Enter your password" className="input input-bordered w-full max-w-xs"{...register("password")}  />
  
    <small className='text-red-500 font-medium mt-4'>{generalError}</small>
</div>

    <div className="card-actions flex justify-center mt-4">
      <button className="btn btn-primary w-full" type='submit'>Login</button>
    </div>
    </form>
    <div>
        <p className='mt-2 font-medium'>New to AMRAP? <Link className='text-primary font-medium' to='/signup'>Sign Up</Link></p>
    </div>
  <div className="divider text-xl">OR</div>

    <div className="card-actions flex justify-center">
      <button onClick={()=>signInWithGoogle()} className="btn btn-outline btn-primary w-full" type='submit'>Continue With Google</button>
    </div>
  </div>
</div>
    </div>
  )
}
