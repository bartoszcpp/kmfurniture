import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"

const Header = () => {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="/">
          <img className="img-fluid logoPng" src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Cart">PRODUKTY</Nav.Link>
            <Nav.Link href="/Cart">O NAS</Nav.Link>
            <Nav.Link href="/Cart">KONTAKT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
