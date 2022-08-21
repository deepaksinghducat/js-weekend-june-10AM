import React from 'react'

function Button(props) {
	console.log("Button");
  return (
	<button >Button</button>
  )
}

export default React.memo(Button)