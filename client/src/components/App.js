import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthService from './../services/auth.services'

import LightNavbar from './ui/lightNavbar/lightNavbar'

import Home from './pages/home/home'
import ProDashboard from './pages/proDashboard/proDashboard'
import CreateAppt from './pages/createAppt/createAppt'
import CreateSalon from './pages/createSalon/createSalon'
import PackForm from './pages/packForm/packForm'
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
    this.fetchUser()

    return (
      <>
        <LightNavbar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route
            path='/user/professionals/dashboard'
            render={(props) => <ProDashboard {...props} loggedInUser={this.state.loggedInUser} />}
          />
          <Route
            path='/appointment/create/:salonId'
            render={(props) => <CreateAppt {...props} />}
          />
          <Route
            path='/packs/create/:salonId'
            render={(props) => <PackForm {...props} loggedInUser={this.state.loggedInUser} />}
          />
          <Route path='/confirm/:id' render={(props) => <Confirm {...props} />} />
          <Route path='/salons/create' render={(props) => <CreateSalon {...props} />} />
          <Route
            path='/salons/:id'
            render={(props) => <SalonDetails {...props} loggedInUser={this.state.loggedInUser} />}
          />
          <Route
            path='/signup'
            render={(props) => <SignupForm {...props} setTheUser={this.setTheUser} />}
          />
          <Route
            path='/login'
            render={(props) => <LoginForm {...props} setTheUser={this.setTheUser} />}
          />
          <Route path='/' render={() => <Home />} />
        </Switch>
      </>
    )
  }
}

export default App
