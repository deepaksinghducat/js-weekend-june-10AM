import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Order() {

  const navigate = useNavigate();

  let user = 0;


  useEffect(() => {
    if (user !== 1) {
      navigate('/');
    }

  }, [user])


  return (
    <div>Order</div>
  )
}

export default Order