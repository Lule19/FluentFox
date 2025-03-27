import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import lija7 from "../asets/lija7.jpg";
import "../App.css";
import on from "../asets/on.jpg";  // Correctly import the image

function OnlineNastava() {
  return (
    <div className="font">
      <div
        className="container mt-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "110vh",
          padding: "20px",
          overflow: "hidden", // Prevent horizontal scrolling
        }}
      >
        <h1 style={{ color: "rgba(39,38,98,255)", textAlign: "center" }}>
          <strong>Online nastava</strong>
        </h1>
        <br />

        <Card className="mb-4 p-3" style={{ backgroundColor: "transparent", border: "none" }}>
          {/* Remove background from Row */}
          <Row className="align-items-center" style={{ background: "none", padding: 0 }}>
            <Col md={6}>
              <Card.Body>
                <Card.Title style={{ color: 'rgba(39,38,98,255)', fontSize: '25px', lineHeight: '1.6' }}>
                  <strong>Učenje iz udobnosti Vašeg doma</strong>
                </Card.Title>
                <Card.Text style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                  Naša škola stranih jezika nudi online programe engleskog i nemačkog jezika.

                  Engleski jezik učimo u manjim grupama, dva puta nedeljno po sat vremena.

                  Časovi nemačkog jezika odvijaju se dva puta nedeljno po sat vremena ili dva puta nedeljno po dva sata (dvočasa).

                  Nastava je u popodnevnim terminima, kako bi bila pogodna za studente i zaposlene polaznike.

                  Učite engleski i nemački jezik u udobnosti svog doma uz podršku naših predavača!
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={6}>
              <motion.img
                src={on}
                alt="News"
                className="img-fluid rounded"
                initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right with opacity 0
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to its original position (x = 0)
                transition={{
                duration: 1, // Duration of the transition
                ease: "easeInOut" // Smooth easing for the animation
                }}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default OnlineNastava;
