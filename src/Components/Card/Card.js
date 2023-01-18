import React, { useState } from 'react'
import './Card.css'

export default function Card(props) {

  const noHover = {backgroundColor : 'transparent'}
  const hover = {backgroundColor: 'linear-gradient(180deg, #ff6060 85%, #000000a6 100%)'}

  const [color, setColor] = useState(noHover);
  
  return (
    <div 
      className="card"
      style = {color}
      onMouseEnter = { () => setColor(hover) }
      onMouseLeave = { () => setColor(noHover) }
      >
        {props.children}
    </div>
  )
}

