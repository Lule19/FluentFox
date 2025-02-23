import React from "react";
import CustomNav from './komponente/CustomNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import myImage from './asets/naslovna.jpg';
import milica from './asets/milica.jpg';
import jelisaveta from './asets/jelisaveta.jpg';

import Footer from "./komponente/CustomFut";


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import CustomFut from "./komponente/CustomFut";

import Gallery from "./komponente/Galerija";




function App() {
  return (
    <div>
      
      <CustomNav></CustomNav>


    

      <Card>
        <Card.Img variant="top" src={myImage} />
        <Card.Body>
          
        </Card.Body>
      </Card>
      
    
    <div className="centriranje">
    <div className="container mt-4">
    <h1 style={{ color: 'rgba(39,38,98,255)' }}>Dobrodošli u FluentFox centar za strane jezike za decu i odrasle!</h1>
    <p style={{ color: 'rgba(39,38,98,255)' }}>Ovde možete pronaći informacije o našim kursevima.</p>
    </div>
    </div>

    <hr></hr>

    <Gallery></Gallery>

    <hr></hr>

    <div id="nastavnice" className="centriranje">
    <div className="container mt-4">
    <h1 style={{ color: 'rgba(39,38,98,255)' }}>Nastavnice</h1>
    <p style={{ color: 'rgba(39,38,98,255)' }}>U našoj školi trenutno rade dve nastavnice.</p>
    
    

    <Container>
        <Row className="justify-content-center"> {/* Dodajemo ovu klasu za centriranje reda */}
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                <Image src={milica} roundedCircle className="custom-image" />
                <h2 style={{ color: 'rgba(39,38,98,255)' }}>Milica Ćirović</h2> {/* Koristimo h2 za manji naslov */}
                <h5 style={{ color: 'rgba(39,38,98,255)' }}>Spanski jezik</h5>
            </Col>
            
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                <Image src={jelisaveta} roundedCircle className="custom-image" />
                <h2 style={{ color: 'rgba(39,38,98,255)' }}>Jelisaveta Miladinović</h2>
                <h5 style={{ color: 'rgba(39,38,98,255)' }}>Engleski jezik</h5>
            </Col>

            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
                <Image src={jelisaveta} roundedCircle className="custom-image" />
                <h2 style={{ color: 'rgba(39,38,98,255)' }}>Jelisaveta Miladinović</h2>
                <h5 style={{ color: 'rgba(39,38,98,255)' }}>Engleski jezik</h5>
            </Col>
        </Row>
    </Container>
</div>

<hr></hr>

</div>




<CustomFut></CustomFut>
</div>



  );


 
}

export default App;
