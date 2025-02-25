import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNav from './komponente/CustomNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import myImage from './asets/naslovna.jpg';
import milica from './asets/milicaN.jpg';
import jelisaveta from './asets/jelisavetaN.jpg';
import irena from './asets/irenaN.jpg';

import CustomFut from "./komponente/CustomFut";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Gallery from "./komponente/Galerija";

import Jezici from "./pages/jezici";
import Kontakti from "./pages/kontakt";
import Lokacija from "./pages/lokacija";
import Galerija from "./pages/galerija";


import { Link } from "react-router-dom";

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Dodato malo kašnjenje (300ms)
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div>
        <CustomNav />

        <Routes>
          <Route path="/" element={
            <>
              <Card>
                <Card.Img variant="top" src={myImage} />
              </Card>

              <div className="centriranje">
                <div className="container mt-4">
                  <h1 style={{ color: 'rgba(39,38,98,255)' }} >Dobrodošli u FluentFox centar za strane jezike za decu i odrasle!</h1>
                  <h3 style={{ color: 'rgba(39,38,98,255)' }} >Nudimo kurseve za decu i odrasle. Takodje postoji mogucnost odrzavanja i online casova!</h3>
                  <p style={{ color: 'rgba(39,38,98,255)' }}>
  <Link to="/jezici" style={{ color: 'rgba(39,38,98,255)', textDecoration: 'none' }}>
    Ovde možete pronaći informacije o našim kursevima.
  </Link>
</p>

                </div>
              </div>

              <hr />
              <Gallery />
              <hr />

              <div id="nastavnice" className="centriranje">
                <div className="container mt-4">
                  <h1 style={{ color: 'rgba(39,38,98,255)' }}>Predavači</h1>
                  <p style={{ color: 'rgba(39,38,98,255)' }}>U našoj školi trenutno rade tri predavača!</p>

                  <Container>
                    <Row className="justify-content-center text-center">
                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={milica} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Milica Ćirović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)' }}>
                          Španski jezik za decu, srednjoškolce i odrasle. Engleski jezik za decu i odrasle.
                        </p>
                      </Col>

                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={jelisaveta} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Jelisaveta Miladinović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)' }}>
                          Engleski jezik za srednjoškolce, studente i odrasle.
                        </p>
                      </Col>

                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={irena} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Irena Mladenović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)' }}>
                          Nemački jezik za decu, srednjoškolce i odrasle.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <hr />
            </>
          } />

          <Route path="/jezici" element={<Jezici />} />
          <Route path="/kontakt" element={<Kontakti />} />
          <Route path="/lokacija" element={<Lokacija />} />
          <Route path="/galerija" element={<Galerija />} />
        </Routes>
        <CustomFut />
      </div>
    </Router>
  );
}

export default App;
