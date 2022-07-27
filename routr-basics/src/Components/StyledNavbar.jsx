import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <nav>
      <h1>
        <NavLink to="/" style={
            ({isActive})=>{
                return isActive ? {color:'red'} : {color:'gray'}
            }
        }>Home</NavLink>
      </h1>
      <h1>
        <NavLink to="/product"  style={
            ({isActive})=>{
                return isActive ? {color:'red'} : {color:'gray'}
            }
        }>Products</NavLink>
      </h1>
      <h1>
        <NavLink to="/about"  style={
            ({isActive})=>{
                return isActive ? {color:'red'} : {color:'gray'}
            }
        }>About</NavLink>
      </h1>
      <h1>
        <NavLink to="/login"  style={
            ({isActive})=>{
                return isActive ? {color:'red'} : {color:'gray'}
            }
        }>Login</NavLink>
      </h1>
    </nav>
  );
}

export default StyledNavbar;
