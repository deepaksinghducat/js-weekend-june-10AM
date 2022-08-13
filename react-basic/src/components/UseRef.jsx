import React, { useRef } from 'react'

function UseRef() {
	const input = useRef()

	const submitHandler = (event) => {
		event.preventDefault();

		input.current.style.borderColor = 'red';
	}
  return (
	<form onSubmit={submitHandler}>
		<input ref={input} type="text" style={{
			marginLeft: '10%'
		}}/>
		{/* <p>{input.current.value}</p> */}
	</form>
  )
}

export default UseRef