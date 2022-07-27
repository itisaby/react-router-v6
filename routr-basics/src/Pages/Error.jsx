import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>OOps! 404 error<br/>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Error