import React from 'react'
import './Pill.css'

function Pill({filter}) {
  return (
    <div className='pill-container'>
        <p>{filter}</p>
    </div>
  )
}

export default Pill