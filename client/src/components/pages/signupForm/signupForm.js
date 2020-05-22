import React, { Component } from 'react'
import AuthService from './../../../services/auth.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      signupInfo: {
        username: '',
        email: '',
        password: '',
        role: 'client',
      },
    }

    this.authService = new AuthService()
  }

  handleInputChange = (event) => {
    let signupInfoCopy = { ...this.state.signupInfo }
    const { name, value } = event.target
    signupInfoCopy = { ...signupInfoCopy, [name]: value }
    this.setState({ signupInfo: signupInfoCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.authService
      .signup(this.state.signupInfo)
      .then(() =>
        this.state.signupInfo.role == 'client'
          ? this.props.history.push('/')
          : this.props.history.push('/salons/create')
      )
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Container>
        <h1>Registro</h1>
        <Row className='is-flex is-centered'>
          <Col xs={10}>
            <Form className='form-margin' onSubmit={this.handleSubmit}>
              <Form.Group controlId='username'>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Usuario'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='ejemplo@hairandnow.es'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <Form.Text className='text-muted'>
                  Nunca compartiremos tu correo con ninguna otra entidad.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Contraseña'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId='accountType' onChange={this.handleInputChange}>
                <Form.Check
                  inline
                  type='radio'
                  label='Cliente'
                  name='role'
                  id='role1'
                  value='client'
                  defaultChecked
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Profesional'
                  name='role'
                  id='role2'
                  value='professional'
                />
              </Form.Group>
              <Button size='lg' block='true' className='red-button' type='submit'>
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignupForm
