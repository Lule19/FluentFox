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

function JeziciDaf() {
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
      
      </div>
    </div>
  );
}

export default JeziciDaf;
