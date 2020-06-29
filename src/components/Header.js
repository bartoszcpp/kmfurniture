import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = props => {
  const { count } = props
  if (count !== 1) {
    return (
      <>
        <Navbar className="navbar" id="up" expand="lg">
          <Navbar.Brand href="/">
            <img className="img-fluid logoPng" src="/logo.webp" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {count === 1}
            <Nav className="ml-auto">
              <Nav.Link onClick={() => scrollTo("#product")}>PRODUKTY</Nav.Link>
              <Nav.Link>O NAS</Nav.Link>
              <Nav.Link onClick={() => scrollTo("#contact")}>KONTAKT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  } else {
    return (
      <>
        <Navbar className="navbar" id="up" expand="lg">
          <Navbar.Brand href="/">
            <img className="img-fluid logoPng" src="/logo.webp" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {count === 1}
            <Nav className="ml-auto">
              <Nav.Link href="/">PRODUKTY</Nav.Link>
              <Nav.Link href="/">O NAS</Nav.Link>
              <Nav.Link href="/">KONTAKT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default Header
