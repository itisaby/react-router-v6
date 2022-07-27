import React from 'react'
import { Outlet } from 'react-router-dom'
// import StyledNavbar from '../Components/StyledNavbar'

const SharedProductLayout = () => {
  return (
    <div>
        <h2>products</h2>
        <Outlet />
    </div>
  )
}

export default SharedProductLayout