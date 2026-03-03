import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import lija7 from "../asets/lija7.jpg"; // Using consistent background
import "../App.css";

import { newsData } from "../newsData";

function Novosti() {
  
  return (
    <div className="font">
      <div
        className="container mt-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div className="text-center mb-5">
           <h2 className="section-title text-uppercase">Novosti</h2>
        </div>

        <Container>
          <Row className="justify-content-center">
            {[...newsData].sort((a, b) => b.id - a.id).map((news) => (
              <Col key={news.id} md={10} className="mb-4">
                <Card className="shadow hover-effect" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
                  <Card.Body className="d-flex flex-column flex-md-row align-items-center p-4">
                     <div className="p-3 mb-3 mb-md-0 me-md-4 text-center" style={{ backgroundColor: "rgba(39,38,98,0.1)", borderRadius: "50%", width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i className={`${news.icon} fa-2x`} style={{ color: "#c65A28" }}></i>
                     </div>
                     <div>
                        <Card.Title style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "1.5rem" }}>{news.title}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted" style={{ fontWeight: "500" }}>{news.subtitle}</Card.Subtitle>
                        <Card.Text as="div" className="text-justify-custom" style={{ color: "#555", marginBottom: 0 }}>
                          {news.content}
                        </Card.Text>
                     </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Novosti;
