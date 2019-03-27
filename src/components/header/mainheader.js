import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="my logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="autosmall" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="autosmall" href="#link">
                Who we are
              </Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Social Media
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Market Research
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Printing</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="autosmall" href="#link">
                Insight
              </Nav.Link>

              <Nav.Link className="autosmall" href="#link">
                Rebel
              </Nav.Link>

              <Nav.Link className="autosmall" href="#link">
                Reviews
              </Nav.Link>

              <Nav.Link className="autosmall" href="#link">
                Resources
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="autosmall" href="#link">
                <Button> DIGITAL BOOTCAMP</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;