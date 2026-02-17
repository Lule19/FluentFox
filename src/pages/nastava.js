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
        <div className="text-center mb-5">
           <h2 className="section-title text-uppercase">Tipovi nastave</h2>
        </div>
        
       <div className="nastavaTekst">
       <h3 className="section-subtitle">Grupna:</h3>
        <p className="text-justify-custom">
      Rad u manjim grupama (do 5 polaznika) omogućava interakciju između polaznika, stvaranje pozitivne i prijatne atmosfere za rad
      što ohrabruje polaznike da više učestvuju u nastavi pa tako i sama nastava postaje dinamičnija i produktivnija.
    </p>
    <br></br>
    <h3 className="section-subtitle">Individualna:</h3>
    <p className="text-justify-custom">
      Rad 1 na 1. Nastava prilagođena potrebama samog polaznika koja prati njegov tempo napretka što dovodi do veće efikasnosti
      u učenju i bržeg savladavanja gradiva.
    </p>
    <br></br>
    <h3 className="section-subtitle">Online:</h3>
    <p className="text-justify-custom">
      Učenje iz udobnosti Vašeg doma u opuštenoj atmosferi, idealna za zauzete, poslovne ljude sa manjkom slobodnog vremena, kao i za studente.
    </p>

    </div>
    </div>
    </div>
  );
}

export default Nastava;
