import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home/home'
import SalonDetails from './pages/salonDetails/salonDetails'
import SignupForm from './pages/signupForm/signupForm'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/salons/:id"
          render={(props) => <SalonDetails {...props} />}
        />
        <Route path="/signup" render={() => <SignupForm />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    )
  }
}

export default App
