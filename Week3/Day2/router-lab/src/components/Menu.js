import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <Navbar bg="warning" variant="dark">
      <Link className="navbar-brand" to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          width="40"
          height="40"
          alt="React Bootstrap logo"
        />
        React Bootstrap
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/aboutus">
              About
            </Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
