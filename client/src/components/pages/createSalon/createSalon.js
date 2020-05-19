import React, { Component } from 'react'
import SalonService from './../../../services/salons.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CreateSalon extends Component {
  constructor() {
    super()
    this.state = {
      salonInfo: {
        name: '',
        type: '',
        street: '',
        number: null,
        zipcode: null,
        town: '',
        province: '',
        complements: '',
        mondayOpeningDay: false,
        mondayOpeningTime: '',
        mondayClosingTime: '',
        tuesdayOpeningDay: false,
        tuesdayOpeningTime: '',
        tuesdayClosingTime: '',
        wednesdayOpeningDay: false,
        wednesdayOpeningTime: '',
        wednesdayClosingTime: '',
        thursdayOpeningDay: false,
        thursdayOpeningTime: '',
        thursdayClosingTime: '',
        fridayOpeningDay: false,
        fridayOpeningTime: '',
        fridayClosingTime: '',
        saturdayOpeningDay: false,
        saturdayOpeningTime: '',
        saturdayClosingTime: '',
        sundayOpeningDay: false,
        sundayOpeningTime: '',
        sundayClosingTime: '',
      },
    }
    this.salonService = new SalonService()
  }

  handleInputChange = (event) => {
    let salonInfoCopy = { ...this.state.salonInfo }
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    salonInfoCopy = { ...salonInfoCopy, [event.target.name]: value }
    this.setState({ salonInfo: salonInfoCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const salon = {
      name: this.state.salonInfo.name,
      type: this.state.salonInfo.type,
      address: {
        street: this.state.salonInfo.street,
        number: this.state.salonInfo.number,
        zipcode: this.state.salonInfo.zipcode,
        town: this.state.salonInfo.town,
        province: this.state.salonInfo.province,
        complements: this.state.salonInfo.complements,
      },
      schedule: {
        monday: {
          openingDay: this.state.salonInfo.mondayOpeningDay,
          openingTime: this.state.salonInfo.mondayOpeningTime,
          closingTime: this.state.salonInfo.mondayClosingTime,
        },
        tuesday: {
          openingDay: this.state.salonInfo.tuesdayOpeningDay,
          openingTime: this.state.salonInfo.tuesdayOpeningTime,
          closingTime: this.state.salonInfo.tuesdayClosingTime,
        },
        wednesday: {
          openingDay: this.state.salonInfo.wednesdayOpeningDay,
          openingTime: this.state.salonInfo.wednesdayOpeningTime,
          closingTime: this.state.salonInfo.wednesdayClosingTime,
        },
        thursday: {
          openingDay: this.state.salonInfo.thursdayOpeningDay,
          openingTime: this.state.salonInfo.thursdayOpeningTime,
          closingTime: this.state.salonInfo.thursdayClosingTime,
        },
        friday: {
          openingDay: this.state.salonInfo.fridayOpeningDay,
          openingTime: this.state.salonInfo.fridayOpeningTime,
          closingTime: this.state.salonInfo.fridayClosingTime,
        },
        saturday: {
          openingDay: this.state.salonInfo.saturdayOpeningDay,
          openingTime: this.state.salonInfo.saturdayOpeningTime,
          closingTime: this.state.salonInfo.saturdayClosingTime,
        },
        sunday: {
          openingDay: this.state.salonInfo.sundayOpeningDay,
          openingTime: this.state.salonInfo.sundayOpeningTime,
          closingTime: this.state.salonInfo.sundayClosingTime,
        },
      },
    }

    this.salonService
      .createSalon(salon)
      .then((res) => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <h1>Nueva peluquería</h1>
        <Row className='is-flex is-centered'>
          <Col xs={10}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='formName'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nombre de tu local'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId='formType' onChange={this.handleInputChange}>
                <Form.Check
                  inline
                  type='radio'
                  label='Barbería'
                  name='type'
                  id='type1'
                  value='barbería'
                  defaultChecked
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Peluquería unisex'
                  name='type'
                  id='type3'
                  value='peluquería unisex'
                  defaultChecked
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Peluquería de señoras'
                  name='type'
                  id='type2'
                  value='peluquería de señoras'
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Otro'
                  name='type'
                  id='type4'
                  value='otro'
                  defaultChecked
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Calle/Plaza/Avenida</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Calle Castilla'
                  name='street'
                  value={this.state.salonInfo.street}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      type='number'
                      name='number'
                      value={this.state.salonInfo.number}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control
                      type='number'
                      name='zipcode'
                      value={this.state.salonInfo.zipcode}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Detalles dirección</Form.Label>
                <Form.Control
                  type='text'
                  name='complements'
                  placeholder='Pasaje, semisótano...'
                  value={this.state.salonInfo.complements}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Localidad</Form.Label>
                <Form.Control
                  type='text'
                  name='town'
                  value={this.state.salonInfo.town}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  type='text'
                  name='province'
                  value={this.state.salonInfo.province}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Días de apertura</Form.Label>
                <br />
                <Form.Check
                  inline
                  label='Lunes'
                  type='checkbox'
                  name='mondayOpeningDay'
                  checked={this.state.mondayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Martes'
                  type='checkbox'
                  name='tuesdayOpeningDay'
                  checked={this.state.tuesdayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Miércoles'
                  type='checkbox'
                  name='wednesdayOpeningDay'
                  checked={this.state.wednesdayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Jueves'
                  type='checkbox'
                  name='thursdayOpeningDay'
                  checked={this.state.thursdayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Viernes'
                  type='checkbox'
                  name='fridayOpeningDay'
                  checked={this.state.fridayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Sábado'
                  type='checkbox'
                  name='saturdayOpeningDay'
                  checked={this.state.saturdayOpeningDay}
                  onChange={this.handleInputChange}
                />
                <Form.Check
                  inline
                  label='Domingo'
                  type='checkbox'
                  name='sundayOpeningDay'
                  checked={this.state.sundayOpeningDay}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Lunes</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='mondayOpeningTime'
                        value={this.state.salonInfo.mondayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='mondayClosingTime'
                        value={this.state.salonInfo.mondayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Martes</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='tuesdayOpeningTime'
                        value={this.state.salonInfo.tuesdayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='tuesdayClosingTime'
                        value={this.state.salonInfo.tuesdayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Miércoles</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='wednesdayOpeningTime'
                        value={this.state.salonInfo.wednesdayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='wednesdayClosingTime'
                        value={this.state.salonInfo.wednesdayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Jueves</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='thursdayOpeningTime'
                        value={this.state.salonInfo.thursdayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='thursdayClosingTime'
                        value={this.state.salonInfo.thursdayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Viernes</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='fridayOpeningTime'
                        value={this.state.salonInfo.fridayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='fridayClosingTime'
                        value={this.state.salonInfo.fridayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Sábado</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='saturdayOpeningTime'
                        value={this.state.salonInfo.saturdayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='saturdayClosingTime'
                        value={this.state.salonInfo.saturdayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Domingo</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apertura</Form.Label>
                      <Form.Control
                        type='time'
                        name='sundayOpeningTime'
                        value={this.state.salonInfo.sundayOpeningTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Cierre</Form.Label>
                      <Form.Control
                        type='time'
                        name='sundayClosingTime'
                        value={this.state.salonInfo.sundayClosingTime}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
