import React, { Component } from 'react'

import LightNavbar from './../../ui/lightNavbar/lightNavbar'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      loginInfo: {
        username: '',
        email: '',
        password: '',
        type: 'cliente',
      },
    }
  }

  handleInputChange = (event) => {
    let loginInfoCopy = { ...this.state.loginInfo }
    const { name, value } = event.target
    loginInfoCopy = { ...loginInfoCopy, [name]: value }
    this.setState({ loginInfo: loginInfoCopy })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  setType(event) {
    console.log(event)
  }

  render() {
    return (
      <main>
        <LightNavbar />

        <Container>
          <Row className="is-flex is-centered">
            <Col xs={10}>
              <h1>Registro</h1>
              <Form className="form-margin" onSubmit={this.handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Usuario"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="ejemplo@hairandnow.es"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu correo con ninguna otra entidad.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="accountType" onChange={this.handleInputChange}>
                  <Form.Check
                    inline
                    type="radio"
                    label="Cliente"
                    name="type"
                    id="type1"
                    value="cliente"
                    defaultChecked
                   
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Profesional"
                    name="type"
                    id="type2"
                    value="profesional"
                  />
                </Form.Group>
                <Button
                  size="lg"
                  block="true"
                  className="red-button"
                  type="submit">
                  Registrar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default SignupForm
