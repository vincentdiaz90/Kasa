import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error404.css'

export default function Error404() {

    const navigate = useNavigate()

  return (
    <div className='error404'>
        <h2 className='error404-title'>404</h2>
        <p className='error404-message'>Oups! La page que vous demandez n'existe pas.</p>
        <button
        className='error404-btn'
        onClick={() => navigate("/") }
        >Retourner sur la page d’accueil</button>
    </div>
  )
}
