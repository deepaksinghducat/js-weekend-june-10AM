import React from 'react'
import { useState } from 'react'

function State() {

  const [name,setName] =  useState();

  return (
    <div>
        <input type="password" value={name} onChange={(event)=> setName(event.target.value)}/>
        <p>{name}</p>
    </div>
  )
}

export default State