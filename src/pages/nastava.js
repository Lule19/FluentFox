import React from "react";
import lija6 from "../asets/lija6.jpg";  // Correctly import the image



import '../App.css';


function Nastava() {
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
        <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}><strong>Tipovi nastave</strong> </h1>
       <div className="nastavaTekst">
       <h3 style={{ color: 'rgba(39,38,98,255)', textAlign: 'Left' }}><strong>Grupna:</strong></h3>
        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Rad u manjim grupama (do 5 polaznika) omogućava interakciju izmedju polaznika, stvaranje pozitivne i prijatne atmosfere za rad
      što ohrabruje polaznike da više učestvuju u nastavi pa tako i sama nastava postaje dinamičnija i produktivnija.
    </p>
    <h3 style={{ color: 'rgba(39,38,98,255)', textAlign: 'Left' }}><strong>Individualna:</strong></h3>
    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Rad 1 na 1. Nastava prilagodjena potrebama samog polaznika koja prati njegov tempo napretka što dovodi do veće efikasnosti
      u učenju i bržeg savladavanja gradiva.
    </p>
    <h3 style={{ color: 'rgba(39,38,98,255)', textAlign: 'Left' }}><strong>Online:</strong></h3>
    <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
      Učenje u udobnosti vašeg doma u opuštenoj atmosferi, idealna za zauzete, poslovne ljude sa manjkom slobodnog vremena, kao i za studente.
    </p>

    </div>
    </div>
    </div>
  );
}

export default Nastava;
