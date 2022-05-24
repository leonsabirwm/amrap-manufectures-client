import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { useAdmin } from '../../../hooks/useAdmin';

export const Navbar = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin();
  
 
  return (
    <div>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar bg-gray-800 lg:px-12">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1  text-white"><div>
        <h3 className='text-left font-bold text-3xl'>AMRAP</h3>
        <p className='text-left font-medium'>Manufactures</p>
        </div></div>
      <Link to='/dashboard/myprofile'>
      <div className='text-white'>{user?<div className="avatar online placeholder  mr-4">
  <div className="bg-sky-500 text-neutral-content rounded-full w-12">
    <span className="text-xl text-black capitalize">{user.displayName.substring(0,1)}</span>
  </div>
</div> :''}</div>
</Link>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal text-white">
          {/* <!-- Navbar menu content here --> */}
         <Link className='text-lg font-medium' to="/">Home</Link>
         <Link className='text-lg font-medium ml-4' to="/portfolio">Portfolio</Link>
         <Link className='mx-4 text-lg font-medium' to="/blogs">Blogs</Link>
         {
           user? <div> <Link className='mx-2 text-lg font-medium' to={admin?'/dashboard/manageproducts':'/dashboard/myorders'}>Dashboard</Link> <button className='text-lg font-medium ' onClick={()=>{
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
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>
    </div>
  )
}
