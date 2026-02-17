import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNav from './komponente/CustomNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import myImage from './asets/naslovnaN2.jpg';
import milica from './asets/milicaN.jpg';
import jelisaveta from './asets/jelisavetaN.jpg';


import Carousel from 'react-bootstrap/Carousel';

import image9 from "./asets/9.jpg";
import image6 from "./asets/6.jpg";
import onlineN from "./asets/laptopfluentfox.jpg";






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
import Nastava from "./pages/nastava";
import JeziciOdrasli from "./pages/jeziciOdrasli";
import JeziciCambridge from "./pages/jeziciCambridge";
import JeziciDaf from "./pages/jeziciDaf";
import OnlineNastava from "./pages/onlineNastava";
import Novosti from "./pages/novosti";


import NotFound from "./NotFound";  

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <div>
        <CustomNav />

        <Routes>
          <Route path="/" element={
            <>

  <div className="container-fluid p-0">
   
            <Card>
                <Card.Img variant="top" src={myImage} />
            </Card>

            <div className="container mt-5 mb-5">
              <h2 className="text-center mb-4" style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "2.5rem" }}>Novosti</h2>
              <Row className="justify-content-center">
                <Col md={6} lg={5} className="mb-4">
                  <Card className="h-100 shadow-sm border-0 hover-card" style={{ borderRadius: "15px", backgroundColor: "#fff" }}>
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <div className="mb-3" style={{ 
                        width: "60px", 
                        height: "60px", 
                        borderRadius: "50%", 
                        backgroundColor: "rgba(198, 90, 40, 0.1)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center" 
                      }}>
                        <i className="fas fa-palette" style={{ fontSize: "1.5rem", color: "#c65A28" }}></i>
                      </div>
                      <Card.Title style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "1.25rem" }}>
                        Crtanje i slikanje za decu i odrasle
                      </Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">Svake subote</Card.Subtitle>
                      <Card.Text style={{ color: "#555" }}>
                        Otkrijte svoju kreativnost u opuštenoj atmosferi uz stručno vođenje...
                      </Card.Text>
                      <div className="mt-auto">
                        <Link to="/novosti" className="btn btn-outline-primary rounded-pill px-4" style={{ borderColor: "#c65A28", color: "#c65A28" }}>
                          Saznajte više <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} lg={5} className="mb-4">
                  <Card className="h-100 shadow-sm border-0 hover-card" style={{ borderRadius: "15px", backgroundColor: "#fff" }}>
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <div className="mb-3" style={{ 
                        width: "60px", 
                        height: "60px", 
                        borderRadius: "50%", 
                        backgroundColor: "rgba(198, 90, 40, 0.1)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center" 
                      }}>
                        <i className="far fa-comments" style={{ fontSize: "1.5rem", color: "#c65A28" }}></i>
                      </div>
                      <Card.Title style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "1.25rem" }}>
                        Časovi francuskog jezika
                      </Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">Za sve uzraste</Card.Subtitle>
                      <Card.Text style={{ color: "#555" }}>
                        Novi program u našoj školi! Prilagođeno početnicima i onima sa predznanjem...
                      </Card.Text>
                      <div className="mt-auto">
                        <Link to="/novosti" className="btn btn-outline-primary rounded-pill px-4" style={{ borderColor: "#c65A28", color: "#c65A28" }}>
                          Saznajte više <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>

  <Carousel interval={4000} className="carousel-fade">

  <Carousel.Item className="carousel-stvar">
    <Link to="/jezici">
    <img
      className="d-block"
      src={image6}
      alt="Programi za decu"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    
    <Carousel.Caption className="carousel-opis">
      <h3>Programi za decu</h3>
      <p>Programi prilagođeni svim uzrastima</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>

  <Carousel.Item className="carousel-stvar">
    <Link to="/jeziciOdrasli">
    <img
      className="d-block"
      src={image9}
      alt="Programi za odrasle"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    
    <Carousel.Caption className="carousel-opis">
      <h3>Programi za odrasle</h3>
      <p>Programi za studente i zaposlene</p>
    </Carousel.Caption>

    </Link>
  </Carousel.Item>

  <Carousel.Item className="carousel-stvar">
    <Link to="/onlineNastava">
    <img
      className="d-block"
      src={onlineN}
      alt="Online nastava"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    
    <Carousel.Caption className="carousel-opis">
      <h3>Online programi</h3>
      <p>Učite iz udobnosti Vašeg doma</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
</Carousel>





  <div id="onama" className="container mt-4">
    <h2 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center', fontWeight: 'bold' }}>
      Dobro došli u FluentFox, školu stranih jezika za decu i odrasle iz Aranđelovca!
    </h2>


    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      <strong>“FluentFox”</strong> je škola stranih jezika osnovana 2024. godine sa sedištem u Aranđelovcu. 
      Posvećeni smo pružanju visokokvalitetnog obrazovanja iz oblasti jezika i komunikacije za sve uzraste.
    </p>

    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Naši predavači su profesionalni, iskusni i posvećeni svom poslu. 
      Nastavu vode uz primenu savremenih metoda i tehnika podučavanja, koristeći najmodernije materijale 
      kako bi svaki čas bio zanimljiv, efikasan i inspirativan.
    </p>

    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Danas je poznavanje stranih jezika ne samo prednost, već i neophodnost. 
      Zbog toga težimo da svaki naš polaznik postigne izvanredne rezultate i stekne veštine koje će mu pomoći 
      da uspešno komunicira u svim sferama života.
    </p>

    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Bilo da želite da naučite <strong>engleski, nemački</strong> ili <strong>španski</strong> jezik, 
      u školi “FluentFox” pronaći ćete kurs koji odgovara Vašim potrebama ili potrebama Vašeg deteta.
    </p>

    <p style={{ textAlign: 'center', marginTop: '20px' }}>
  <Link 
    to="/lokacija#top" 
    onClick={() => window.scrollTo(0, 0)} // Pomeri na vrh stranice
    style={{ 
      color: 'white', 
      backgroundColor: 'rgba(39,38,98,255)', 
      padding: '10px 20px', 
      borderRadius: '5px', 
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    Lokacija naše škole
  </Link>
</p>

  </div>
</div>

              <hr />
              <Gallery />
              <hr />

              <div id="nastavnice" className="centriranje">
                <div className="container mt-4">
                  <h1 style={{ color: 'rgba(39,38,98,255)' }}><strong>Osnivači</strong></h1>
                  

                  <Container>


                  <Row className="justify-content-center text-center">
  {[  
    { src: milica, name: "Milica Ćirović", text: <>Španski jezik za decu, srednjoškolce i odrasle <br /> Engleski jezik za decu i odrasle</> },
    { src: jelisaveta, name: "Jelisaveta Miladinović", text: "Engleski jezik za srednjoškolce, studente i odrasle" },
    
  ].map((teacher, index) => (
    <Col key={index} xs={12} sm={6} lg={3} className="d-flex flex-column align-items-center">
      <Image src={teacher.src} roundedCircle className="custom-image" />
      <h4 style={{ color: 'rgba(39,38,98,255)' }}><strong>{teacher.name}</strong></h4>
      <p style={{ color: 'rgba(39,38,98,255)' }}>{teacher.text}</p>
    </Col>
  ))}
</Row>


                  </Container>
                </div>
              </div>

              
            </>
          } />

          <Route path="/jezici" element={<Jezici />} />
          <Route path="/kontakt" element={<Kontakti />} />
          <Route path="/lokacija" element={<Lokacija />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/nastava" element={<Nastava />} />

          <Route path="/jeziciOdrasli" element={<JeziciOdrasli />} />
          <Route path="/jeziciCambridge" element={<JeziciCambridge />} />
          <Route path="/jeziciDaf" element={<JeziciDaf />} />
          <Route path="/onlineNastava" element={<OnlineNastava />} />
          <Route path="/novosti" element={<Novosti />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <CustomFut />
      </div>
    </Router>
  );
}

export default App;
