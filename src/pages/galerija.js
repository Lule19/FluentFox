import React from "react";
import lija6 from "../asets/lija6.jpg"; // Correctly import the image
import '../App.css';
import Gallery2 from "../komponente/Galerija2";

function Galerija() {
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

<h1 style={{ color: "rgba(39,38,98,255)" }}><strong>Galerija slika</strong>
</h1>

<Gallery2></Gallery2>




    </div>
    
    
    
    </div>
    
  );
}

export default Galerija;
