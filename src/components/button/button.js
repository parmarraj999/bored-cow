import React from 'react'
import "./button.css"

function Button({text}) {
  return (
    <div className='button-container'>{text}</div>
  )
}

export default Button