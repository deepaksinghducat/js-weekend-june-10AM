import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child'

function Parent() {
	const [counter,setCounter] = useState(0)
	console.log("Parent");

	const clickMe = useCallback(() => {
		// setCounter(counter => counter + 1)
		setCounter(1)

	},[]);

  return (
	<div><Child clickMe={clickMe} counter={counter}/></div>
  )
}

export default Parent