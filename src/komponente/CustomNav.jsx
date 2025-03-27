import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css"; 
import logo2 from "../asets/logo2.jpg";
import { Link } from "react-router-dom"; // Ispravljeno na "react-router-dom"

const CustomNav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isNavOpen, setIsNavOpen] = useState(false); // Novo stanje za kontrolu otvaranja navbara

    // Funkcija za praćenje veličine ekrana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Funkcija za otvaranje/zatvaranje dropdown-a
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Funkcija za navigaciju i zatvaranje navbara
    const handleNavigation = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Zatvori navbar na mobilnom uređaju nakon što se odabere opcija
        if (isMobile) {
            setIsNavOpen(false);
        }
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo"
                        src={logo2}
                        alt="Logo"
                        width="130"
                        height="145"
                    />
                    
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setIsNavOpen(!isNavOpen)} // Togglovanje otvaranja/zatvaranja navbara
                />
                <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={handleNavigation}>Početna</Nav.Link>
                        <Nav.Link as={Link} to="/#onama" onClick={handleNavigation}>O nama</Nav.Link>

                        {/* Dropdown koji menja ponašanje u zavisnosti od uređaja */}
                        <NavDropdown 
                            title="Programi" 
                            id="nav-dropdown" 
                            className="drop"
                            show={dropdownOpen}  
                            onClick={isMobile ? toggleDropdown : undefined} 
                            onMouseEnter={!isMobile ? () => setDropdownOpen(true) : undefined}  
                            onMouseLeave={!isMobile ? () => setDropdownOpen(false) : undefined} 
                        >
                            <NavDropdown.Item as={Link} to="/jezici" onClick={() => { setDropdownOpen(false); handleNavigation(); }}>Deca</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jeziciOdrasli" onClick={() => { setDropdownOpen(false); handleNavigation(); }}>Odrasli</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/onlineNastava" onClick={() => { setDropdownOpen(false); handleNavigation(); }}>Online nastava</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jeziciCambridge" onClick={() => { setDropdownOpen(false); handleNavigation(); }}>Cambridge ispiti</NavDropdown.Item>
                           
                           
                        </NavDropdown>

                        <Nav.Link href="/#nastavnice" onClick={handleNavigation}>Predavači</Nav.Link>
                        <Nav.Link as={Link} to="/nastava" onClick={handleNavigation}>Nastava</Nav.Link>
                        <Nav.Link as={Link} to="/galerija" onClick={handleNavigation}>Galerija</Nav.Link>
                        <Nav.Link as={Link} to="/kontakt" onClick={handleNavigation}>Kontakt</Nav.Link>
                        <Nav.Link as={Link} to="/lokacija" onClick={handleNavigation}>Lokacija</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNav;
