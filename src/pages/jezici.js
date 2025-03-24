import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import lija7 from "../asets/lija7.jpg";
import lija2 from "../asets/lija2.jpg";
import engleski from "../asets/engleskiD.jpg";
import nemacki from "../asets/nemackiD.jpg";
import spanski from "../asets/spanskiD.jpg";

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

    <div className="">
       <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}><strong>Programi za decu</strong> </h1>
        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
        Idealno vreme za početak učenja stranih jezika kod dece je sa 4 godine, kada su
dovoljno odrasla da je moguće primeniti odgovarajuću metodiku u nastavi, ali i
dalje dovoljno mala da uče kroz igru i zabavu, ne shvatajući to kao ozbiljan i težak
zadatak.
<br></br>
Kada je reč o školarcima, FluentFox nudi kompletan obrazovni program za sve
razrede osnovne škole, pomažući učenicima da savladaju školsko gradivo,
poboljšaju svoje ocene i održe visok nivo uspeha. Takođe, razvijaju se njihove
socijalne i komunikativne veštine, što im pomaže da se lakše uključe u društvo i
budu samostalniji.
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
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Engleski jezik za decu</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje programa tokom cele školske godine <br></br>
                  
                  Trajanje časova: <br></br>
                  Deca predškolskog uzrasta 45min <br></br>
                  Deca školskog uzrasta 1h <br></br>
                  Dva časa nedeljno
                  
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={spanski} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Španski jezik za decu</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                  Trajanje programa tokom cele školske godine <br></br>
                  
                  Trajanje časova: <br></br>
                  Deca školskog uzrasta 1h <br></br>

                  Dva časa nedeljno
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={nemacki} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ color: "rgba(39,38,98,255)" }}><strong>Nemački jezik za decu</strong></Card.Title>
                  <Card.Text style={{ color: "rgba(39,38,98,255)" }}>
                    Trajanje programa tokom cele školske godine <br></br>
                    Trajanje casova: <br></br>
                    Deca školskog uzrasta 1h <br></br>
                    Dva časa nedeljno
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
