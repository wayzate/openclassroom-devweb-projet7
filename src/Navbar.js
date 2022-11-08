import React from 'react'
import {
  NavLink,
} from "react-router-dom"

import {
  logoSvg,
} from "./assets"

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/">
      <img src={logoSvg} alt="Kasa Logo" className="navbar__img" />
    </NavLink>
    <div className="navbar__links">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navbar__links--active" : "navbar__links--inactive")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "navbar__links--active" : "navbar__links--inactive")}
      >
        À propos
      </NavLink>
    </div>
  </nav>
)

export default Navbar
