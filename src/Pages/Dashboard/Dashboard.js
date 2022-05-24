import React, { useEffect } from 'react'
import { DashboardSidebar } from './DashboardSidebar'
import { Outlet, useNavigate } from 'react-router-dom';


export const Dashboard = () => {
    
    
  return (
    <DashboardSidebar>
        <Outlet/>
    </DashboardSidebar>
  )
}
