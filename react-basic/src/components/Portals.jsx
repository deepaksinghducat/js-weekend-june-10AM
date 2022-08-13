import React from 'react'
import ReactDom from 'react-dom'


const UpperRoot = (props) => {
	return (
	  <div>uppper root</div>
	)
  }


function Portals() {

	

  return (
	<React.Fragment>
	   {
	       ReactDom.createPortal(<UpperRoot /> ,document.getElementById('top-root'))
	   }
	</React.Fragment>
  )
}

export default Portals