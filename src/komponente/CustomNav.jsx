import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import '../App.css';  // or './CustomNav.css' if your CSS is in the same folder


import logo2 from '../asets/logo2.jpg';

import { Link } from "react-router";




const CustomNav = () => {
    return(
      <Navbar expand="lg" className="custom-navbar">
      <Container>
      <Navbar.Brand href="/">
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
                  <Nav.Link as={Link} to="/">O nama</Nav.Link>
                  <Nav.Link as={Link} to="/jezici">Kursevi</Nav.Link>
                  <Nav.Link href="/#nastavnice">Predavaci</Nav.Link>
                  <Nav.Link as={Link} to="/galerija">Galerija</Nav.Link>
                  <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                  <Nav.Link as={Link} to="/lokacija">Lokacija</Nav.Link>
                  
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
  
    );
} ;

export default CustomNav;

