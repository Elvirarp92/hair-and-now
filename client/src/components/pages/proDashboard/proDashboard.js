import React, { Component } from 'react'
import SalonService from './../../../services/salons.services'

import { Link } from 'react-router-dom'

import SalonCard from './salonCard/salonCard'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './proDashboard.css'

class ProDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.salonService = new SalonService()
  }

  getSalonInfo = () => {
    this.salonService
      .getSalons(`?owner=${this.props.loggedInUser._id}`)
      .then((response) => {
        this.setState({ salons: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container as='section'>
        {this.props.loggedInUser && (
          <div>
            <h1>Panel de gestión</h1>
            <p className='welcome'>¡Bienvenido, {this.props.loggedInUser.username}!</p>
            {!this.state.salons
              ? this.getSalonInfo()
              : this.state.salons.map((elm) => <SalonCard key={elm._id} salon={elm} />)}
            <Link to='/salons/create'>
              <Button size='lg' block='true' className='red-button'>
                Crear peluquería
              </Button>
            </Link>
          </div>
        )}
      </Container>
    )
  }
}

export default ProDashboard
