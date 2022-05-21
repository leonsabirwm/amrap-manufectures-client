import React, { useEffect } from 'react'
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
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        ,
        ,
        ,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [user, loading, error] = useAuthState(auth);

    console.log(user);
    console.log(errors);
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
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
 <h3 className='text-2xl font-bold'>Sign Up</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Name</span>
  </label>
  <input type="text" placeholder="Enter your name" class="input input-bordered w-full max-w-xs"  {...register("name", { required: true })} />
  <label class="label">
    <span class="label-text-alt text-red-500">{errors.name?.type === 'required' && "First name is required"}</span>
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" {...register("email", { required: true,pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, })} />
  <label class="label">
    <span class="label-text-alt text-red-500">{(errors.email?.type === 'required' && "Email is required") || (errors.email?.type === 'pattern' && "Please enter a valid email")}</span>
  </label>
</div>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Password</span>
  </label>
  <input type="text" placeholder="Enter your password" class="input input-bordered w-full max-w-xs"{...register("password", { required: true,minLength:8 })}  />
  <label class="label">
  <span class="label-text-alt text-red-500">{(errors.password?.type === 'required' && "Password is required") || (errors.password?.type === 'minLength' && "Password must contain eight characters")}</span>
  </label>
</div>
    <div class="card-actions flex justify-center">
      <button class="btn btn-primary w-full" type='submit'>Sign Up</button>
    </div>
    </form>
    <div>
        <p className='mt-2'>Was here before? <Link className='text-primary font-medium' to='/login'>Login</Link></p>
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
