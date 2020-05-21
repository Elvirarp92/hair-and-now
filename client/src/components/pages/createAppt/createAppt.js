import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import AppointmentService from './../../../services/appointments.services'
import PackService from './../../../services/packs.services'
import SalonService from './../../../services/salons.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import 'react-datepicker/dist/react-datepicker.css'
import './createAppt.css'

registerLocale('es', es)

class CreateAppt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salonInfo: {},

      apptInfo: {
        dates: [],
      },

      dateManager: new Date(),
    }
    this.appointmentService = new AppointmentService()
    this.packService = new PackService()
    this.salonService = new SalonService()
  }

  getPacks() {
    this.packService
      .getPacks(this.props.match.params.salonId)
      .then((response) => this.setState({ packs: response.data }))
      .catch((err) => console.log(err))
  }

  getSalonInfo() {
    const id = this.props.match.params.salonId
    this.salonService
      .getSalon(id)
      .then((response) => {
        this.setState({ salonInfo: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleDateChange = (date) => this.setState({ dateManager: date })

  pushDate = (event) => {
    event.preventDefault()
    let apptInfoCopy = { ...this.state.apptInfo }
    apptInfoCopy.dates.push(this.state.dateManager)
    this.setState({ apptInfo: apptInfoCopy })
  }

  handleInputChange = (event) => {
    let apptInfoCopy = { ...this.state.apptInfo }
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    apptInfoCopy = { ...apptInfoCopy, [event.target.name]: value }
    this.setState({ apptInfo: apptInfoCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.appointmentService
      .postNewAppt(this.state.apptInfo, this.props.match.params.salonId)
      .then((res) => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    this.getPacks()
    this.getSalonInfo()
  }

  render() {
    return (
      <Container as='section'>
        <h1>Pedir cita en {this.state.salonInfo.name}</h1>
        <h2>Elige fecha y hora</h2>
        <p className='datetime-rec'>Te recomendamos introducir varias fechas alternativas</p>
        {this.state.apptInfo.dates.length > 0 &&
          this.state.apptInfo.dates.map((elm, idx) => (
            <Alert key={idx} className='alert'>
              {elm.toLocaleString()}
            </Alert>
          ))}

        <Form className='is-flex is-centered' onSubmit={this.pushDate}>
          <DatePicker
            locale='es'
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={15}
            timeCaption='Hora'
            className='date'
            onChange={this.handleDateChange}
            selected={this.state.dateManager}
            dateFormat='d MMMM yyyy h:mm aa'
          />
          <Button className='red-button' type='submit'>
            Añadir
          </Button>
        </Form>
        <h2>Elige un pack de servicios</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group onChange={this.handleInputChange}>
            {this.state.packs &&
              this.state.packs.map((elm) => (
                <article key={elm._id} className='packCard'>
                  <Form.Label>
                    <Form.Check
                      type='radio'
                      name='services'
                      id={`services${elm._id}`}
                      value={elm._id}
                    />
                    {elm.services.map((elm) => (
                      <p key={elm._id}>{elm.name}</p>
                    ))}
                  </Form.Label>
                  <p className='price'>{elm.price} € </p>
                </article>
              ))}
          </Form.Group>
          {this.state.apptInfo.dates.length > 0 && (
            <Button size='lg' block='true' className='red-button' type='submit'>
              Crear
            </Button>
          )}
        </Form>
      </Container>
    )
  }
}

export default CreateAppt
