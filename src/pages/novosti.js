import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import lija7 from "../asets/lija7.jpg"; // Using consistent background
import "../App.css";

function Novosti() {
  const newsData = [
    {
      id: 1,
      title: "Crtanje i slikanje za decu i odrasle",
      subtitle: "Svake subote u našoj školi",
      icon: "fas fa-palette",
      content: (
        <>
          <p>
            <strong>Crtanje i slikanje za decu i odrasle – svake subote u našoj školi.</strong>
          </p>
          <p>
            Bez obzira na prethodno iskustvo, svi su dobrodošli da istraže boje, oblike i svoju maštu u opuštenoj i podsticajnoj atmosferi.
            Rad je u malim grupama, uz stručno vođenje.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Časovi francuskog jezika",
      subtitle: "Za decu i odrasle",
      icon: "far fa-comments",
      content: (
        <>
          <p>
            <strong>Od sada u našoj školi možete pohađati časove francuskog jezika, kako za decu, tako i za odrasle.</strong>
          </p>
          <p>
            Programi su prilagođeni uzrastu i nivou znanja, a časovi su namenjeni i početnicima i polaznicima sa predznanjem.
          </p>
        </>
      ),
    },
  ];

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
        <h1 style={{ color: "rgba(39,38,98,255)", textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}>
          <strong>Novosti</strong>
        </h1>

        <Container>
          <Row className="justify-content-center">
            {newsData.map((news) => (
              <Col key={news.id} md={10} className="mb-4">
                <Card className="shadow hover-effect" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
                  <Card.Body className="d-flex flex-column flex-md-row align-items-center p-4">
                     <div className="p-3 mb-3 mb-md-0 me-md-4 text-center" style={{ backgroundColor: "rgba(39,38,98,0.1)", borderRadius: "50%", width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i className={`${news.icon} fa-2x`} style={{ color: "#c65A28" }}></i>
                     </div>
                     <div>
                        <Card.Title style={{ color: "rgba(39,38,98,255)", fontWeight: "bold", fontSize: "1.5rem" }}>{news.title}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted" style={{ fontWeight: "500" }}>{news.subtitle}</Card.Subtitle>
                        <Card.Text as="div" style={{ color: "#555", fontSize: "1.1rem", lineHeight: "1.6" }}>
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
