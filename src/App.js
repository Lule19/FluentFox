import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNav from './komponente/CustomNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import myImage from './asets/naslovnaN2.jpg';
import milica from './asets/milicaN.jpg';
import jelisaveta from './asets/jelisavetaN.jpg';
import irena from './asets/irenaN.jpg';


import Carousel from 'react-bootstrap/Carousel';

import image9 from "./asets/9.jpg";
import image10 from "./asets/10.jpg";
import image5 from "./asets/5.jpg";
import image6 from "./asets/6.jpg";
import onlineN from "./asets/laptopfluentfox.jpg";

import image20 from "./asets/slikaOdrasli1.jpg";
import image21 from "./asets/slikaOdrasli2.jpg";




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

function App() {
  return (
    <Router>
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

  <Carousel interval={4000} className="carousel-fade">

  <Carousel.Item className="carousel-stvar">
    <a href="/jezici">
    <img
      className="d-block"
      src={image6}
      alt="First slide"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    </a>
    <Carousel.Caption className="carousel-opis">
      <h3>Programi za decu</h3>
      <p>Programi prilagođeni svim uzrastima</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousel-stvar">
    <a href="/jeziciOdrasli">
    <img
      className="d-block"
      src={image9}
      alt="Second slide"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    </a>
    <Carousel.Caption className="carousel-opis">
      <h3>Programi za odrasle</h3>
      <p>Programi za studente i zaposlene</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousel-stvar">
    <a href="/jeziciCambridge">
    <img
      className="d-block"
      src={onlineN}
      alt="Third slide"
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "620px",
      }}
    />
    </a>
    <Carousel.Caption className="carousel-opis">
      <h3>Online programi</h3>
      <p>Učite iz udobnosti Vašeg doma</p>
    </Carousel.Caption>
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
                  <h1 style={{ color: 'rgba(39,38,98,255)' }}>Predavači</h1>
                  <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6' }}>U našoj školi trenutno su zaposlena tri predavača</p>

                  <Container>
                    <Row className="justify-content-center text-center">
                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={milica} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Milica Ćirović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6' }}>
                          Španski jezik za decu, srednjoškolce i odrasle Engleski jezik za decu i odrasle
                        </p>
                      </Col>

                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={jelisaveta} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Jelisaveta Miladinović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6' }}>
                          Engleski jezik za srednjoškolce, studente i odrasle
                        </p>
                      </Col>

                      <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                        <Image src={irena} roundedCircle className="custom-image" />
                        <h2 style={{ color: 'rgba(39,38,98,255)' }}>Irena Mladenović</h2>
                        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6' }}>
                          Nemački jezik za decu, srednjoškolce i odrasle
                        </p>
                      </Col>
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
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <CustomFut />
      </div>
    </Router>
  );
}

export default App;
