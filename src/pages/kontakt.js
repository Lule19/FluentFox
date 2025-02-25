import React from "react";
import lija6 from "../asets/lija6.jpg";  // Correctly import the image

import milicaV from "../asets/milicaV.jpg";  // Correctly import the image
import jelisavetaV from "../asets/jelisavetaV.jpg";  // Correctly import the image
import irenaV from "../asets/irenaV.jpg";  // Correctly import the image

import '../App.css';

import Carousel from 'react-bootstrap/Carousel';

function Kontakti() {
  return (
    <div className="font">
      <div
        className="container mt-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "130vh", // Full screen height
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          
        }}
      >
        <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}>Kontakt informacije nastavnica:</h1>
        
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={milicaV}  // Use the image imported above
              alt="First slide"
              style={{ objectFit: 'contain', height: '100%', width: '100%' }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jelisavetaV}  // Use the image imported above
              alt="Second slide"
              style={{ objectFit: 'contain', height: '100%', width: '100%' }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={irenaV}  // Use the image imported above
              alt="Third slide"
              style={{ objectFit: 'contain', height: '100%', width: '100%' }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Kontakti;
