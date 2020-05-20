import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import AppointmentService from './../../../services/appointments.services'
import PackService from './../../../services/packs.services'
import SalonService from './../../../services/salons.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import 'react-datepicker/dist/react-datepicker.css'
import './createAppt.css'

registerLocale('es', es)

class CreateAppt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salonInfo: {},

      apptInfo: {
        date: [],
      },

      dateManager: new Date()

    }
    this.appointmentService = new AppointmentService()
    this.packService = new PackService()
    this.salonService = new SalonService()
  }

  getPacks() {
    const id = this.props.match.params.salonId
    this.packService
      .getPacks(id)
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

  handleDateChange = (date) => {
    let dateCopy = [...this.state.apptInfo.date]
    console.log(dateCopy)
    dateCopy.push(date)
    this.setState({
      apptInfo: { date: dateCopy },
      dateManager: date
    })

    console.log(this.state)

  }

  handleInputChange = (event) => {
    let apptInfoCopy = { ...this.state.apptInfo }
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    apptInfoCopy = { ...apptInfoCopy, [event.target.name]: value }
    this.setState({ apptInfo: apptInfoCopy })
  }

  componentDidMount = () => {
    this.getPacks()
    this.getSalonInfo()
  }

  render() {
    return (
      <section>
        <h1>Pedir cita en {this.state.salonInfo.name}</h1>
        <Form>
          <h2>Elige un pack de servicios</h2>
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
          <h2>Elige fecha y hora</h2>
          <p className='datetime-rec'>Te recomendamos introducir varias fechas alternativas</p>
          <Form.Group>
            <DatePicker
              locale='es'
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='Hora'
              className='date'
              onChange={this.handleDateChange}
              selected={this.state.dateManager}
            />
          </Form.Group>
          <Button size='lg' block='true' className='red-button' type='submit'>
            Crear
          </Button>
        </Form>
      </section>
    )
  }
}

export default CreateAppt
