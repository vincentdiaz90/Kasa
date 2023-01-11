import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error404.css'

export default function Error404() {

    const navigate = useNavigate()

  return (
    <div className='error404-title'>
        <h2>Error404</h2>
        <button
        onClick={() => navigate("/") }
        >Retourner à l'acceuil</button>
    </div>
  )
}
