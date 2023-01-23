import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'lien-site active-nav' : 'lien-site'
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to="/nous-concernant"
                className={({ isActive }) =>
                    isActive ? 'lien-site active-nav' : 'lien-site'
                }
            >
                À propos
            </NavLink>
        </nav>
    )
}
