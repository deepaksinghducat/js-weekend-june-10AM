import React, { useState } from 'react'
import { useEffect } from 'react';

function UseEffect() {
  const [counter,setCounter] = useState(0);

  useEffect(() => {
	const interval = setInterval(() => {
		setCounter(couter  => couter + 1)
	},1000);

	return () => clearInterval(interval);
	console.log('counter updated');
  },[counter])

  return (
	<div>{counter}</div>
  )
}

export default UseEffect