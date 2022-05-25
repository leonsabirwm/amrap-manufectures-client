import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Loading } from '../Pages/Shared/Loading/Loading';
import useToken from '../hooks/useToken';

export const SignUp = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [generalError,setGeneralError] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        ,
        ,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [user, loading] = useAuthState(auth);

    useEffect(()=>{
        if(error||gError){
            console.log(error.code||gError);
            if(error.code === 'auth/email-already-in-use'){
                setGeneralError(`Email Already in Use!!`);
            }
            if(error.code ==='auth/wrong-password'){
                setGeneralError("Wrong Password!!")
            }
            if(!(error.code === 'auth/user-not-found'||'auth/wrong-password')){
                setGeneralError('Somthing Went Wrong!!')
            }
        }
       },[error,gError]);
    const onSubmit =async (data,event)=>{
        event.preventDefault();
        console.log(data);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName: data.name });
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
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
 <h3 className='text-2xl font-bold'>Sign Up</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"  {...register("name", { required: true })} />
  <label className="label">
    <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && "First name is required"}</span>
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true,pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, })} />
  <label className="label">
    <span className="label-text-alt text-red-500">{(errors.email?.type === 'required' && "Email is required") || (errors.email?.type === 'pattern' && "Please enter a valid email")}</span>
  </label>
</div>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Password</span>
  </label>
  <input type="text" placeholder="Enter your password" className="input input-bordered w-full max-w-xs"{...register("password", { required: true,minLength:8 })}  />
  <label className="label">
  <span className="label-text-alt text-red-500">{(errors.password?.type === 'required' && "Password is required") || (errors.password?.type === 'minLength' && "Password must contain eight characters")}</span>
  </label>
  <small className='text-red-500 font-medium mb-4'>{generalError}</small>
</div>
    <div className="card-actions flex justify-center">
      <button className="btn btn-primary w-full" type='submit'>Sign Up</button>
    </div>
    </form>
    <div>
        <p className='mt-2 font-medium'>Was here before? <Link className='text-primary font-medium' to='/login'>Login</Link></p>
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
