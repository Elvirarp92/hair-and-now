import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthService from './../services/auth.services'

import LightNavbar from './ui/lightNavbar/lightNavbar'

import Home from './pages/home/home'
import SalonDetails from './pages/salonDetails/salonDetails'
import SignupForm from './pages/signupForm/signupForm'
import LoginForm from './pages/loginForm/loginForm'
import Confirm from './pages/confirm/confirm'

class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }

  setTheUser = (userObj) => this.setState({ loggedInUser: userObj })

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authService
        .isLoggedIn()
        .then((response) => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))
    }
  }

  render() {
    return (
      <>
        <LightNavbar
          setTheUser={this.setTheUser}
          loggedInUser={this.state.loggedInUser}
        />
        <Switch>
          <Route
            path="/confirm/:id"
            render={(props) => <Confirm {...props} />}
          />
          <Route
            path="/salons/:id"
            render={(props) => <SalonDetails {...props} />}
          />
          <Route
            path="/signup"
            render={(props) => (
              <SignupForm {...props} setTheUser={this.setTheUser} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginForm {...props} setTheUser={this.setTheUser} />
            )}
          />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </>
    )
  }
}

export default App
