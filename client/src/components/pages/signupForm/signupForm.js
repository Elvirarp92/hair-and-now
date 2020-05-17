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
    this.state = {}
  }

  render() {
    return (
      <main>
        <LightNavbar />

        <Container>
          <Row className="is-flex is-centered">
            <Col xs={10} >
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control type="text" placeholder="Usuario" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@hairandnow.es"
                  />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu correo con ninguna otra entidad.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group controlId="accountType">
                  <Form.Check
                    inline
                    type="radio"
                    label="Cliente"
                    name="accountTypeRadio"
                    id="accountTypeRadio1"
                    value="cliente"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Profesional"
                    name="accountTypeRadio"
                    id="accountTypeRadio2"
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
