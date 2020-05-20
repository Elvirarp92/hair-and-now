import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

import SalonList from './salonList/salonList'

import SalonService from './../../../services/salons.services'

import './home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      salons: [],
    }
    this.salonService = new SalonService()
  }

  getAllSalons = () => {
    this.salonService
      .getSalons('')
      .then((response) => this.setState({ salons: response.data }))
      .catch((err) => console.log(err))
  }

  componentDidMount = () => this.getAllSalons()

  render() {
    return (
      <Container as='main'>
        <Row as='section'>
          <Col xs={12} s={12}>
            <h1>Hair & Now</h1>
          </Col>
          <Col xs={12} s={12} m={6} className='is-flex is-centered'>
            <SalonList salons={this.state.salons} />
          </Col>
          <Col xs={12} s={12} m={6}>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  Búsqueda avanzada
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Button size='lg' block='true' className='red-button'>
              Buscar
            </Button>
            <p className='pro-cta'>¿Profesional? Anúnciate con nosotros</p>
            <Link to='/signup'>
              <Button size='lg' block='true' className='red-button'>
                Regístrate
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
