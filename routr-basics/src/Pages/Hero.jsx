import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        Hero <br/>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Hero