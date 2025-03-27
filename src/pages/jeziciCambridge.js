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

function JeziciCambridge() {
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
       <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}><strong>Cambridge ispiti</strong></h1>
       

<p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
U FluentFox centru za strane jezike deca i odrasli se mogu pripremiti za polaganje sledećih međunarodno priznatih Cambridge ispita:
<br></br>
<br></br>
<ul>
    <li>Pre A1 Starters</li>
    <li>A1 Movers</li>
    <li>A2 Flyers</li>
    <li>A2 Key</li>
    <li>A2 Key For Schools</li>
    <li>B1 Preliminary</li>
    <li>B1 Preliminary for Schools</li>
    <li>B2 First</li>
    <li>B2 First for Schools</li>
  </ul>

</p>




</div>



      </div>
    </div>
  );
}

export default JeziciCambridge;
