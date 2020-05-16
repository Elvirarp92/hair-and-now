import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home/home'
import SalonDetails from "./pages/salonDetails/salonDetails"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/salons/:id"  render={props => <SalonDetails {...props}/>}/>
        <Route path="/" render={() => <Home />} />
      </Switch>
    )
  }
}

export default App
