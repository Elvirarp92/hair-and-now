import React, { Component } from 'react'
import AuthService from './../../../services/auth.services'

import LightNavbar from './../../ui/lightNavbar/lightNavbar'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginInfo: { username: '', password: '' },
    }
    this.authService = new AuthService()
  }

  handleInputChange = (event) => {
    let loginInfoCopy = { ...this.state.loginInfo }
    const { name, value } = event.target
    loginInfoCopy = { ...loginInfoCopy, [name]: value }
    this.setState({ loginInfo: loginInfoCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.authService
      .login(this.state.loginInfo)
      .then((res) => {
        this.props.setTheUser(res.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        err.response.status === 400 &&
          this.setState({ errorMessage: err.response.data.message })
      })
  }

  render() {
    return (
      <main>
        <LightNavbar />
        <h1>Inicio de sesión</h1>
        <Container>
          <Row className="form-margin" className="is-flex is-centered">
            <Col xs={10}>
              <Form onSubmit={this.handleSubmit}>
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

export default LoginForm
