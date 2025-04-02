import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import lija7 from "../asets/lija7.jpg";
import lija2 from "../asets/lija2.jpg";
import engleski from "../asets/engleskiO.jpg";
import nemacki from "../asets/nemackiO.jpg";
import spanski from "../asets/spanskiO.jpg";

import "../App.css";

function JeziciOdrasli() {
  return (
    <div className="font">
      <div
        className="container mt-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "110vh", // Full screen height
          padding: "20px",
        }}
      >
       <div className="">
       <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}><strong>Programi za odrasle</strong> </h1>
        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
        Naša škola stranih jezika nudi širok spektar kurseva, od početnih do naprednih,
prilagođenih potrebama odraslih polaznika, uključujući i studente. Bilo da želite
da unapredite svoje jezičke veštine iz poslovnih razloga, putovanja, ili lične
ambicije, naši programi dizajnirani su tako da odgovore na Vaše ciljeve.
Kroz interaktivne metode nastave, kao i rad u malim grupama, učimo vas kako da
efikasno komunicirate na engleskom, španskom i nemačkom jeziku. Nastava je
dinamična i usmerena na praktičnu primenu stranih jezika u svakodnevnim
situacijama.
    </p>


    </div>

        {/* Bootstrap Grid System */}
        <Container>
          

          <Row className="justify-content-center">
            {/* Prvi red */}
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={engleski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Engleski jezik za odrasle</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje programa <strong>od 4 do 6 meseci </strong><br></br>
                  
                  Trajanje časa <strong>1h</strong>  <br></br>
                  Dva časa nedeljno <br></br>
                  <br></br>
                  
                  
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={spanski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Španski jezik za odrasle</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje programa <strong>od 4 do 6 meseci</strong> <br></br>
                  
                  Trajanje časa <strong>1h</strong>  <br></br>
                  Dva časa nedeljno<br></br>
                  <br></br>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={nemacki} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Nemački jezik za odrasle</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje programa <strong>od 3 do 4 meseca</strong> <br></br>
                  
                  Trajanje časa <strong>2h (dvočas)</strong>  <br></br>
                  Dva dvočasa nedeljno<br></br>
                  <br></br>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>



         

            
          
        </Container>
      </div>
    </div>
  );
}

export default JeziciOdrasli;
