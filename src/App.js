import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

import { newsData } from "./newsData";

import Gallery from "./komponente/Galerija";

import Jezici from "./pages/jezici";
import Kontakti from "./pages/kontakt";
import Lokacija from "./pages/lokacija";
import Galerija from "./pages/galerija";
import Nastava from "./pages/nastava";
import JeziciOdrasli from "./pages/jeziciOdrasli";
import JeziciCambridge from "./pages/jeziciCambridge";
import JeziciIelts from "./pages/jeziciIelts";
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

            <motion.div 
              className="container mt-5 mb-5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center text-uppercase w-100" style={{display: 'block'}}>Novosti</h2>
              <Row className="justify-content-center">
                {[...newsData].sort((a, b) => b.id - a.id).slice(0, 3).map((news) => (
                  <Col key={news.id} md={6} lg={4} className="mb-4">
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
                          <i className={news.icon} style={{ fontSize: "1.5rem", color: "#c65A28" }}></i>
                        </div>
                        <Card.Title style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "1.25rem" }}>
                          {news.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{news.subtitle}</Card.Subtitle>
                        <Card.Text style={{ color: "#555" }}>
                          {news.summary}
                        </Card.Text>
                        <div className="mt-auto">
                          <Link to="/novosti" className="btn-outline-custom">
                            Saznajte više <i className="fas fa-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </motion.div>

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





  <div id="onama" className="container mt-5 mb-5">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="section-title">
        Dobro došli u <span style={{ color: '#c65A28' }}>FluentFox</span>
      </h2>
      <p className="text-center text-muted mb-4" style={{ fontSize: '1.2rem' }}>Škola stranih jezika za decu i odrasle u Aranđelovcu</p>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
           <p className="text-justify-custom">
      <strong>“FluentFox”</strong> je škola stranih jezika osnovana 2024. godine sa sedištem u Aranđelovcu. 
      Posvećeni smo pružanju visokokvalitetnog obrazovanja iz oblasti jezika i komunikacije za sve uzraste.
    </p>

          <p className="text-justify-custom">
            Naši predavači su profesionalni, iskusni i posvećeni svom poslu. 
            Nastavu vode uz primenu savremenih metoda i tehnika podučavanja, koristeći najmodernije materijale 
            kako bi svaki čas bio zanimljiv, efikasan i inspirativan.
          </p>

          <p className="text-justify-custom">
            Danas je poznavanje stranih jezika ne samo prednost, već i neophodnost. 
            Zbog toga težimo da svaki naš polaznik postigne izvanredne rezultate i stekne veštine koje će mu pomoći 
            da uspešno komunicira u svim sferama života.
          </p>

          <p className="text-justify-custom">
            Bilo da želite da naučite <strong>engleski, francuski</strong> ili <strong>španski</strong> jezik, 
            u školi “FluentFox” pronaći ćete kurs koji odgovara Vašim potrebama ili potrebama Vašeg deteta.
          </p>
        </div>
      </div>
    </motion.div>

    <div className="text-center mt-5">
      <Link 
        to="/lokacija#top" 
        onClick={() => window.scrollTo(0, 0)} 
        className="btn-custom"
      >
         Lokacija naše škole <i className="fas fa-map-marker-alt ms-2"></i>
      </Link>
    </div>
  </div>
</div>

              <hr />
              <Gallery />
              <hr />

              <motion.div 
                id="nastavnice" 
                className="container mt-5 mb-5 pb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-5">
                  <h2 className="section-title text-uppercase">Osnivači</h2>
                </div>
                  

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
              </motion.div>

              
            </>
          } />

          <Route path="/jezici" element={<Jezici />} />
          <Route path="/kontakt" element={<Kontakti />} />
          <Route path="/lokacija" element={<Lokacija />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/nastava" element={<Nastava />} />

          <Route path="/jeziciOdrasli" element={<JeziciOdrasli />} />
          <Route path="/jeziciCambridge" element={<JeziciCambridge />} />
          <Route path="/jeziciIelts" element={<JeziciIelts />} />
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
