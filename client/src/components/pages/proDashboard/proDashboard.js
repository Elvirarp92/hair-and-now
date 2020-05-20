import React, { Component } from 'react'

class ProDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <section>{this.props.loggedInUser && <p>{this.props.loggedInUser.username}</p>}</section>
  }
}

export default ProDashboard
