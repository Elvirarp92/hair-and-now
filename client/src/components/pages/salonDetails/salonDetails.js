import React, { Component } from 'react'
import SalonService from './../../../services/salons.services'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import LightNavbar from './../../ui/lightNavbar/lightNavbar'

import './salonDetails.css'

class SalonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.salonService = new SalonService()
  }

  getSalonInfo() {
    const id = this.props.match.params.id
    this.salonService
      .getSalon(id)
      .then((response) => {
        console.log(response.data)
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
      <Container as="main">
        <LightNavbar />
        <h1>{this.state.name}</h1>
        <Row>
          <Col>
            <p className="salon-info-tidbits">{this.state.type}</p>
          </Col>
          <Col>
            <p className="rating-module">{this.state.rating}/10</p>
          </Col>
        </Row>
        <Button size="lg" block="true" className="red-button">
          Pedir cita
        </Button>
        {/* <p>{`${this.state.address.street},`}</p> */}
      </Container>
    )
  }
}

export default SalonDetails
