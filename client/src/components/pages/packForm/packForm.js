import React, { Component } from 'react'

import PackService from './../../../services/packs.services'
import SalonService from './../../../services/salons.services'
import ServiceService from './../../../services/services.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import './packForm.css'

class PackForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      packObj: {
        services: [],
        price: 0,
      },

      hasServices: {},
    }
    this.packService = new PackService()
    this.salonService = new SalonService()
    this.serviceService = new ServiceService()
  }

  getPacks() {
    this.packService
      .getPacks(this.props.match.params.salonId)
      .then((response) => this.setState({ packs: response.data }))
      .catch((err) => console.log(err))
  }

  getServices() {
    this.serviceService
      .getServices()
      .then((response) => this.setState({ services: response.data }))
      .catch((err) => console.log(err))
  }

  getSalonInfo() {
    this.salonService
      .getSalon(this.props.match.params.salonId)
      .then((response) => {
        this.setState({ salonInfo: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    this.getServices()
    this.getPacks()
    this.getSalonInfo()
  }

  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    if (event.target.type === 'checkbox') {
      let hasServicesCopy = { ...this.state.hasServices }
      hasServicesCopy = { ...hasServicesCopy, [event.target.name]: value }
      this.setState({ hasServices: hasServicesCopy })
    } else if (event.target.type === 'number') {
      let packObjCopy = { ...this.state.packObj }
      packObjCopy = { ...packObjCopy, [event.target.name]: Number(value) }
      this.setState({ packObj: packObjCopy })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let packObjCopy = { ...this.state.packObj }
    const hasServices = Object.entries(this.state.hasServices)
    let serviceArray = []

    hasServices.map((elm) => (elm[1] ? serviceArray.push(elm[0]) : null))
    packObjCopy = { ...packObjCopy, services: serviceArray }
    this.packService
      .postNewPack(packObjCopy, this.props.match.params.salonId)
      .then((res) => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container as='section'>
        {this.state.salonInfo && <h1>Gestionar servicios de {this.state.salonInfo.name}</h1>}
        {this.state.packs && this.state.packs.length > 0 ? (
          this.state.packs.map((elm) => (
            <Alert key={elm._id} className='is-flex packs'>
              <div>
                {elm.services.map((elm) => (
                  <p className='service-label'>{elm.name}</p>
                ))}
              </div>
              <p className="price">{elm.price} €</p>
            </Alert>
          ))
        ) : (
          <p>Aún no tienes packs asociados a este establecimiento</p>
        )}
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            {this.state.services &&
              this.state.services.map((elm) => (
                <Form.Check
                  key={elm._id}
                  type='checkbox'
                  inline
                  name={elm._id}
                  label={elm.name}
                  onChange={this.handleInputChange}
                />
              ))}
          </Form.Group>
          <Form.Group className='is-flex is-centered'>
            <Form.Label>Precio (€)</Form.Label>
            <Form.Control
              type='number'
              name='price'
              value={this.state.packObj.price}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button size='lg' block='true' className='red-button' type='submit'>
            Crear pack
          </Button>
        </Form>
      </Container>
    )
  }
}

export default PackForm
