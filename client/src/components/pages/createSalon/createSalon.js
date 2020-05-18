import React, { Component } from 'react'
import AuthService from './../../../services/auth.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CreateSalon extends Component {
  constructor() {
    super()
    this.state = {}
    this.authService = new AuthService()
  }

  render() {
    return (
      <Container>
        <h1>Nueva peluquería</h1>
        <Row className='is-flex is-centered'>
          <Col xs={10}>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' placeholder='Nombre de tu local' />
              </Form.Group>
              <Form.Group controlId='formType'>
                <Form.Check
                  inline
                  type='radio'
                  label='Barbería'
                  name='salonType'
                  id='salonType1'
                  value='barbería'
                  defaultChecked
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Peluquería unisex'
                  name='salonType'
                  id='salonType3'
                  value='peluquería unisex'
                  defaultChecked
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Peluquería de señoras'
                  name='salonType'
                  id='salonType2'
                  value='peluquería de señoras'
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Otro'
                  name='salonType'
                  id='salonType4'
                  value='otro'
                  defaultChecked
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Calle/Plaza/Avenida</Form.Label>
                <Form.Control type='text' placeholder='Calle Castilla' />
              </Form.Group>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type='number' />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                <Form.Group>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control type='number' />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Detalles dirección</Form.Label>
                <Form.Control type='text' placeholder='Pasaje, semisótano...'/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Localidad</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Provincia</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Button size='lg' block='true' className='red-button' type='submit'>
                Crear
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CreateSalon
