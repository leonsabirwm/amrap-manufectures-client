import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAdmin } from './../../hooks/useAdmin';

export const DashboardSidebar = ({children}) => {
    const [admin] = useAdmin();
  return (
    <div >
        
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  flex flex-col items-center justify-center bg-gray-700">
  
    {/* <!-- Page content here --> */}
    {children}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 font-medium text-lg overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
    
    { !admin ? <li><NavLink to='/dashboard/myorders'>My Orders</NavLink></li> :""}
    { !admin ? <li><NavLink className='my-4' to='/dashboard/addreview'>Add a review</NavLink></li>:""}
     <li><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
    { admin ? <li><NavLink to='/dashboard/addproduct'>Add a Product</NavLink></li> : ''}
    { admin ? <li><NavLink to='/dashboard/makeadmin'>Make Admin</NavLink></li> : ''}
    { admin ? <li><NavLink to='/dashboard/manageproducts'>Manage Products</NavLink></li> : ''}
    { admin ? <li><NavLink to='/dashboard/manageorders'>Manage Orders</NavLink></li> : ''}
    
    </ul>
  
  </div>
</div>
    </div>
  )
}
