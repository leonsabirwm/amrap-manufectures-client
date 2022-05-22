import React from 'react'
import { DashboardSidebar } from './DashboardSidebar'
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <DashboardSidebar>
        <Outlet/>
    </DashboardSidebar>
  )
}
