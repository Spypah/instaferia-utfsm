import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './user_menu'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import image from '../assets/logo_letra.png'



export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-info" sticky="top">
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
          <Nav className="me-auto">
            <Nav.Link href="/actual_projects">Proyectos actuales</Nav.Link>
            <Nav.Link href="/old_projects">Proyectos anteriores</Nav.Link>
            <Nav.Link href="/about">Sobre el evento</Nav.Link>
            <NavDropdown title="[Alumno]" id="basic-nav-dropdown">
              <NavDropdown.Item href="/project?id=1">Mi Proyecto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
