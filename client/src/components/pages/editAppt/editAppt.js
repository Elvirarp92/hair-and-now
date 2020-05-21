import React, { Component } from 'react'

import AppointmentService from './../../../services/appointments.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class EditAppt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markForDeletion: {},
    }
    this.appointmentService = new AppointmentService()
  }

  getAppt() {
    this.appointmentService
      .getAppt(this.props.match.params.id)
      .then((response) => {
        const appt = response.data
        appt.dates = appt.dates.map((elm) => new Date(Date.parse(elm)))
        const minuteArray = []
        const pack = appt.services[0]
        pack.services.map((elm) => minuteArray.push(elm.estimatedTime))
        //this gives us an estimated time in minutes
        const sumTimes = minuteArray.reduce((acc, elm) => acc + elm)
        this.setState({ appointment: appt, estimatedMinutes: sumTimes })
      })
      .catch((err) => console.log(err))
  }

  markForDeletion = (event) => {
    const check = event.target.checked
    let markForDeletionCopy = { ...this.state.markForDeletion }
    markForDeletionCopy = { ...markForDeletionCopy, [event.target.name]: check }
    this.setState({ markForDeletion: markForDeletionCopy })
  }

  removeDates = (event) => {
    event.preventDefault()
    const apptCopy = { ...this.state.appointment }
    const markedForDeletion = Object.entries(this.state.markForDeletion)
    markedForDeletion.map((elm) => (elm[1] ? apptCopy.dates.splice(elm[0], 1) : null))
    this.setState({ appointment: apptCopy })
  }

  validateDates = (event) => {
    event.preventDefault()

    const apptCopy = { ...this.state.appointment }

    if (apptCopy.dates.length > 0) {
      apptCopy.estimatedEndTime = apptCopy.dates[0].setMinutes(
        apptCopy.dates[0].getMinutes() + this.state.estimatedMinutes
      )
    }

    apptCopy.validated = true
    
    console.log(apptCopy)

    this.setState({ appointment: apptCopy })

    this.appointmentService
      .editAppt(apptCopy, this.props.match.params.id)
      .then((res) => {
        this.props.history.push('/user/professionals/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => this.getAppt()

  render() {
    return (
      <Container as='section'>
        <h1>Confirmar o rechazar cita</h1>
        <p>
          Elimina todas las fechas que no interesen, o todas si ninguna encaja, y dale a enviar para
          informar al usuario.
        </p>
        <Form onSubmit={this.removeDates}>
          {this.state.appointment &&
            this.state.appointment.dates.map((elm, idx) => (
              <Form.Group key={idx} className='is-flex'>
                <Form.Label>{elm.toLocaleString('es-ES')}</Form.Label>
                <Form.Check type='checkbox' name={idx} onChange={this.markForDeletion} />
              </Form.Group>
            ))}
          <Button type='submit' size='lg' block='true' className='red-button'>
            Eliminar fechas seleccionadas
          </Button>
        </Form>
        {this.state.appointment && this.state.appointment.dates.length <= 1 && (
          <Form onSubmit={this.validateDates}>
            <Button type='submit' size='lg' block='true' className='red-button'>
              Validar
            </Button>
          </Form>
        )}
      </Container>
    )
  }
}

export default EditAppt
