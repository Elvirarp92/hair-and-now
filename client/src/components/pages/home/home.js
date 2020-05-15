import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './home.css'

class Home extends Component {
  render() {
    return (
      <Container as="main">
        <Row as="section">
          <Col s={12}>
            <h1>Hair & Now</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
