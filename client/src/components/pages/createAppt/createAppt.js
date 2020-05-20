import React, { Component } from 'react'
import AppointmentService from './../../../services/appointments.services'
import PackService from './../../../services/packs.services'
import SalonService from './../../../services/salons.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './createAppt.css'

class CreateAppt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salonInfo: {},

      apptInfo: {},
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

  componentDidMount = () => {
    this.getPacks()
    this.getSalonInfo()
  }

  render() {
    console.log(this.state.packs)
    return (
      <section>
        <h1>Pedir cita en {this.state.salonInfo.name}</h1>
        <Form>
          <h2>Elige un pack de servicios</h2>
          {this.state.packs &&
            this.state.packs.map((elm) => (
              <Form.Group as="article" key={elm._id} className='packCard'>
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
              </Form.Group>
            ))}
            <h2>Elige fecha y hora</h2>
            <p>Te recomendamos introducir varias fechas alternativas</p>
            <Form.Group as="article">
                <Form.Control type="datetime" />
            </Form.Group>
        </Form>
      </section>
    )
  }
}

export default CreateAppt
