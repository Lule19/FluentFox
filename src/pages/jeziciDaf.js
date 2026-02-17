import React from "react";
import lija7 from "../asets/lija7.jpg";

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
