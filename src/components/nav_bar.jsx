import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './user_menu'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página de inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/actual_projects'
      >
        Proyectos Actuales
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/old_projects'
      >
        Proyectos Anteriores
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/about'
      >
        Sobre el evento
      </NavLink>
      <div>
        <UserMenu />
      </div>
    </nav>
  )
}

export default NavBar
