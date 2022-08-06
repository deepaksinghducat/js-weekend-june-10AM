import React from 'react'

function Child(props) {

    props.childTransfer(10,20,30);

  return (
    <div>{ props.data}</div>
  )
}

export default Child