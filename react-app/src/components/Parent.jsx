import React from 'react'
import Child from './Child'

function Parent() {

    const array = [
        10,20,30,50
    ];
  
    const childTransfer = (...a) => {
        console.log("child called",a);
    }

  return (
    <div style={{
        textAlign: 'center',
    }}><Child data={array[0]} childTransfer={childTransfer}/></div>
  )
}

export default Parent