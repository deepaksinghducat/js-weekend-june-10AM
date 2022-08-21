import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Profile() {

  const navigate = useNavigate();

  let user = 0;

  if(user !== 1) {
     navigate('/');
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Profile