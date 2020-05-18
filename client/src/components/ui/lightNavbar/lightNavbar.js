import React from 'react'

import './lightNavbar.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const LightNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" bsPrefix="brand">
        Hair & Now
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/signup">Registro</Nav.Link>
          <Nav.Link href="/login">Iniciar sesión</Nav.Link>
          <Nav.Link href="#">Reservas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LightNavbar
