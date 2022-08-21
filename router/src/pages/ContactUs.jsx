import React from 'react'
import { useParams } from 'react-router-dom'

function ContactUs() {

  const params = useParams();
  
  return (
    <div>
      <p>Name : {params.name}</p>
      <p>Email : {params.email}</p>

    </div>
  )
}

export default ContactUs