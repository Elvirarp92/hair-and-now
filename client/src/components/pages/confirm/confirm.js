import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthService from './../../../services/auth.services'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirming: true,
    }
    this.authService = new AuthService()
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    console.log(id)
    this.authService
      .confirm(id)
      .then((data) => {
        this.setState({ confirming: false })
      })
      .catch((err) => {
        err.response.status === 400 &&
          this.setState({ errorMessage: err.response.data.message })
      })
  }

  render() {
    return (
      <main>
        {this.state.confirming ? (
          <Button size="lg" block="true" className="red-button" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Confirmando...
          </Button>
        ) : (
          <Link to="/">
            <Button size="lg" block="true" className="red-button">
              Volver a Inicio
            </Button>
          </Link>
        )}
      </main>
    )
  }
}

export default Confirm
