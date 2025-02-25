import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import lija7 from "../asets/lija7.jpg";
import lija2 from "../asets/lija2.jpg";
import engleski from "../asets/engleski.jpg";
import nemacki from "../asets/nemacki.jpg";
import spanski from "../asets/spanski.jpg";

import "../App.css";

function Jezici() {
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
        <h1 style={{ color: "rgba(39,38,98,255)" }}>Kursevi koje nudimo</h1>
        <p style={{ color: "rgba(39,38,98,255)" }}>
          U našoj školi trenutno možete učiti tri jezika: engleski, španski i nemački!
        </p>

        {/* Bootstrap Grid System */}
        <Container>
          <Row className="justify-content-center">
            {/* Prvi red */}
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={engleski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Engleski jezik za decu</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje kursa tokom cele skolske godine <br></br>
                  
                  Trajanje casova : <br></br>
                  Deca predskolskog uzrasta- 45min <br></br>
                  Deca skolskog uzrasta - 1h <br></br>
                  Jedan cas dva puta nedeljno
                  
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={spanski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Španski jezik za decu</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje kursa tokom cele skolske godine <br></br>
                  
                  Trajanje casova : <br></br>
                  Deca skolskog uzrasta - 1h <br></br>

                  Jedan cas dva puta nedeljno
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={nemacki} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Nemački jezik za decu</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                    Trajanje kursa tokom cele skolske godine <br></br>
                    Trajanje casova : <br></br>
                    Deca skolskog uzrasta - 1h <br></br>
                    Jedan cas dva puta nedeljno
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {/* Prvi red */}
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={engleski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Engleski jezik za odrasle</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje kursa od 3 do 4 meseca <br></br>
                  
                  Trajanje casova : <br></br>
                  Odrasli - 1h  <br></br>
                  Jedan cas dva puta nedeljno <br></br>
                  <br></br>
                  
                  
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={spanski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Španski jezik za odrasle</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje kursa od 3 do 4 meseca <br></br>
                  
                  Trajanje casova : <br></br>
                  Odrasli - 1h  <br></br>
                  Jedan cas dva puta nedeljno <br></br>
                  <br></br>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={nemacki} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Nemački jezik zs odrasle</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje kursa od 3 do 4 meseca <br></br>
                  
                  Trajanje casova : <br></br>
                  Odrasli - 1h  <br></br>
                  Jedan cas dva puta nedeljno <br></br>
                  <br></br>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>



          <h3 style={{ color: "rgba(39,38,98,255)" }}>Dostupni su i internacionalni testovi!</h3>
          {/* Drugi red */}
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={nemacki} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Test DaF nemački na Goethe institutu</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                    Naučite nemački jezik sa najnovijim metodama! <br></br>
                    <br></br>
                    <br></br>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={lija7} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}>Cambridge ispiti</Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                    Priprema za polaganje medjunarodnih ispita!
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

export default Jezici;
