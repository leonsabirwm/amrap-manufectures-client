import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { useAdmin } from '../../../hooks/useAdmin';
import { MdDashboardCustomize } from "react-icons/md";

export const Navbar = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin();
  
 
  return (
    <div>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col overflow-hidden">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar lg:px-16 bg-gray-800">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1  text-white"><div>
        <h3 className='text-left font-bold text-3xl'>AMRAP</h3>
        <p className='text-left font-medium'>Manufactures</p>
        </div></div>
       
           <label htmlFor="my-drawer-2" className="btn text-3xl text-white btn-ghost drawer-button lg:hidden"><MdDashboardCustomize></MdDashboardCustomize></label>
       

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal flex justify-center items-center text-white">
          {/* <!-- Navbar menu content here --> */}
          <Link to='/dashboard/myprofile' className=''>
      <div className='text-white'>{user?<div className="avatar online placeholder  mr-4">
  <div className="bg-sky-500 text-neutral-content rounded-full w-12">
    <span className="text-xl text-black capitalize">{user?.displayName.substring(0,1)}</span>
  </div>
</div> :''}</div>
</Link>
         <Link className='text-lg font-medium' to="/">Home</Link>
         <Link className='text-lg font-medium ml-4' to="/portfolio">Portfolio</Link>
         <Link className='mx-4 text-lg font-medium' to="/blogs">Blogs</Link>
         {
           user? <div> <Link className='mx-2 text-lg font-medium' to={admin?'/dashboard/manageorders':'/dashboard/myorders'}>Dashboard</Link> <button className='text-lg font-medium ' onClick={()=>{
            signOut(auth)
            localStorage.removeItem('access-token')
           }}>Sign Out</button>
           </div> : <Link className='text-lg font-medium ' to='/login'>Login</Link> 
         }
        </ul>
      </div>
      <ToastContainer />
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu flex flex-col items-start p-4 overflow-y-auto w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      <NavLink className='text-lg font-medium' to="/">Home</NavLink>
         <Link className='text-lg font-medium' to="/portfolio">Portfolio</Link>
         <Link className=' text-lg font-medium' to="/blogs">Blogs</Link>
         <Link className='text-lg font-medium' to="/dashboard/myprofile">My Profile</Link>
         {
           user? <div className='flex items-start flex-col'> <Link className='text-lg font-medium' to={admin?'/dashboard/manageorders':'/dashboard/myorders'}>Dashboard</Link> <button className='text-lg font-medium ' onClick={()=>{
            signOut(auth)
            localStorage.removeItem('access-token')
           }}>Sign Out</button>
           </div> : <Link className='text-lg font-medium ' to='/login'>Login</Link>
           
          }
         
      
    </ul>
    
  </div>
</div>
    </div>
  )
}
