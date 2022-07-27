import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'
import StyledNavbar from '../Components/StyledNavbar'

function SharedLayout() {
  return (
    <div>
        <StyledNavbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default SharedLayout