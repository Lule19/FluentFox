import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import '../App.css';  // or './CustomNav.css' if your CSS is in the same folder


import logo2 from '../asets/logo2.jpg';




const CustomNav = () => {
    return(
      <Navbar expand="lg" className="custom-navbar">
      <Container>
      <Navbar.Brand href="#home">
                    <img
                        src={logo2}  // Koristite importovanu sliku
                        alt="Logo"
                        width="80"       // Podesite širinu loga
                        height="80"      // Podesite visinu loga
                    />
                    Fluent Fox 
                </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#home">O nama</Nav.Link>
                  <Nav.Link href="#link">Jezici</Nav.Link>
                  <Nav.Link href="#nastavnice">Nastavnice</Nav.Link>
                  <Nav.Link href="#link">Galerija</Nav.Link>
                  <Nav.Link href="#link">Cenovnik</Nav.Link>
                  <Nav.Link href="#link">Kontakt</Nav.Link>
                  <Nav.Link href="#link">Lokacija</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
  
    );
} ;

export default CustomNav;

