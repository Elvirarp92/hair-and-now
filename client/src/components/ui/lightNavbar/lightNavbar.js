import React, { Component } from 'react'
import AuthService from './../../../services/auth.services'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './lightNavbar.css'

class LightNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.authService = new AuthService()
  }

  logout = () => {
    this.props.setTheUser(false)
    this.authService.logout()
  }

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/' bsPrefix='brand'>
          Hair & Now
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Inicio</Nav.Link>
            {!this.props.loggedInUser ? (
              <>
                <Nav.Link href='/signup'>Registro</Nav.Link>
                <Nav.Link href='/login'>Iniciar sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
                <Nav.Link href='#'>Reservas</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LightNavbar
