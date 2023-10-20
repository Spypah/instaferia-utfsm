import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './user_menu'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Avatar from '@mui/material/Avatar';

import image from '../assets/logo_letra.png'
import user from '../assets/user.png'



export const NavBar = () => {
  return (
    <Navbar expand="lg" className='nav-bar' sticky="top">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={image}
            width="225rem"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "90%" }}>
            <Nav.Link  href="/actual_projects">Proyectos actuales</Nav.Link>
            <Nav.Link href="/old_projects">Proyectos anteriores</Nav.Link>
            <Avatar>
              <img
                alt="."
                src={user}
                width="100%"
                height="100%"
              />{' '}
            </Avatar>
            <NavDropdown title="Ken" id="basic-nav-dropdown">
              <NavDropdown.Item href="/project">Mi Proyecto</NavDropdown.Item>
              <NavDropdown.Item href="/project/edit">Editar Proyecto</NavDropdown.Item>
              {
                //<NavDropdown.Item href="#action/3">Perfil</NavDropdown.Item>
                //<NavDropdown.Divider />
                //<NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
  )
}

export default NavBar
