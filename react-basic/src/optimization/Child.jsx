import React from 'react'
import Button from './Button'

function Child(props) {
	console.log("Child");
  return (
	<div>{props.counter}
		<button onClick={props.clickMe}>Click Me</button>
		<Button />
	</div>
  )
}

export default React.memo(Child)