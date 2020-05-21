import React, { Component } from 'react'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import AppointmentService from './../../../services/appointments.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

registerLocale('es', es)

class EditAppt extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.appointmentService = new AppointmentService()
  }

  getAppt() {
    this.appointmentService
      .getAppt(this.props.match.params.id)
      .then((response) => {
        const appt = response.data
        appt.dates = appt.dates.map(elm => new Date(Date.parse(elm)))
        this.setState({ appointment: appt })})
      .catch((err) => console.log(err))
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
        {this.state.appointment &&
          this.state.appointment.dates.map((elm, idx) => <p key={idx}>{elm.toLocaleString()}</p>)}
      </Container>
    )
  }
}

export default EditAppt
