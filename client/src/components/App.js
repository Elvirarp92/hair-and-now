import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home/home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
    )
  }
}

export default App
