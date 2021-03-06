import React, { Component } from 'react'
import SalonService from './../../../services/salons.services'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import './salonDetails.css'

class SalonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.salonService = new SalonService()
  }

  getSalonInfo() {
    this.salonService
      .getSalon(this.props.match.params.id)
      .then((response) => {
        this.setState(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    this.getSalonInfo()
  }

  render() {
    return (
      <Container>
        <h1>{this.state.name}</h1>
        <Row>
          <Col>
            <p className='salon-info-tidbits'>{this.state.type}</p>
          </Col>
          <Col>
            <p className='rating-module'>{this.state.rating}/10</p>
          </Col>
        </Row>
        {/* placeholder */}
        <img src={`${process.env.PUBLIC_URL}/static/img/barber-seats-mirrors.jpg`} alt={this.state.name} />
        {this.state.address && (
          <p>{`${this.state.address.street}, ${this.state.address.number}, ${this.state.address.zipcode} ${this.state.address.town} (${this.state.address.province})`}</p>
        )}
        {!this.props.loggedInUser ? (
          <Link to={`/login`}>
            <Button size='lg' block='true' className='red-button'>
              Inicia sesión para pedir cita
            </Button>
          </Link>
        ) : (
          <Link to={`/appointment/create/${this.props.match.params.id}`}>
            <Button size='lg' block='true' className='red-button'>
              Pedir cita
            </Button>
          </Link>
        )}

        <Accordion className='accordion-menu'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Horario
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                {this.state.schedule && (
                  <div>
                    <p>
                      Lunes: {this.state.schedule.monday.openingTime} /
                      {this.state.schedule.monday.closingTime}
                    </p>
                    <p>
                      Martes: {this.state.schedule.tuesday.openingTime} /
                      {this.state.schedule.tuesday.closingTime}
                    </p>
                    <p>
                      Miércoles: {this.state.schedule.wednesday.openingTime} /
                      {this.state.schedule.wednesday.closingTime}
                    </p>
                    <p>
                      Jueves: {this.state.schedule.thursday.openingTime} /
                      {this.state.schedule.thursday.closingTime}
                    </p>
                    <p>
                      Viernes: {this.state.schedule.friday.openingTime} /
                      {this.state.schedule.friday.closingTime}
                    </p>
                    <p>
                      Sábado: {this.state.schedule.saturday.openingTime} /
                      {this.state.schedule.saturday.closingTime}
                    </p>
                    <p>
                      Domingo: {this.state.schedule.sunday.openingTime} /
                      {this.state.schedule.sunday.closingTime}
                    </p>
                  </div>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Comentarios
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card> */}
        </Accordion>
      </Container>
    )
  }
}

export default SalonDetails
