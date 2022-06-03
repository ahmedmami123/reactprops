import React from 'react'

function Main(props) {
  return (
    <div style={{backgroundColor:"red"}}>
        <h1>{props.fullName}</h1>
        {props.children}
    </div>
  )
}

export default Main