import React, { Component } from "react"
// import "./App.css"
import { Link, Route, Switch } from "react-router-dom"
import About from "./components/About"
import Profile from "./components/Profile"
import Menu from "./components/Menu"

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <Switch>
          <Route exact path="/">
            <h2>You are in homepage </h2>
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <h3>Footer 2021</h3>
      </div>
    )
  }
}

export default App
