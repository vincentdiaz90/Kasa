import React from 'react'
import './Footer.css'
import Logo from '../../assets/images/Layout&footer/Logo.png'

export default function Footer() {
  return (
    <footer>
        <img className='footer-img' src={Logo} alt="" />
        <h2 className='footer-title'>© 2022 Kasa. Tous droits réservés</h2>
    </footer>
  )
}
