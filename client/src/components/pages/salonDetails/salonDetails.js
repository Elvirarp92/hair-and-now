import React, { Component } from 'react'
import SalonService from './../../../services/salons.services'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    return <p>{this.state.name}</p>
  }
}

export default SalonDetails
