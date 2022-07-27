import React from 'react'

function Dashboard({user}) {
  return (
    <div>Dashboard
      <br/>
      <h1>{user?.name}</h1>
      <h2>{user?.email}</h2>
    </div>
  )
}

export default Dashboard