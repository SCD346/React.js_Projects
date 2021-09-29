// import React from 'react'
  // No longer needed with React17

import ReactDom from 'react-dom'

function Greeting() {
  return <h4>Hello, this is Stephen</h4>
}

ReactDom.render(<Greeting/>, document.getElementById('root'))