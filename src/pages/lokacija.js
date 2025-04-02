import React, { useState, useEffect } from "react";
import lija6 from "../asets/lija6.jpg"; 
import lija7 from "../asets/lija7.jpg"; 
import izlog from "../asets/izlog.jpg";
import '../App.css';

function Lokacija() {
  const [backgroundImage, setBackgroundImage] = useState(izlog);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(lija7); // Mobilni ekrani
      } else {
        setBackgroundImage(izlog); // Desktop ekrani
      }
    };

    // Pozivamo funkciju odmah i dodajemo event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Čistimo event listener pri unmount-u
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font" 
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "130vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="container mt-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: 'rgba(39,38,98,255)' }}><strong>Lokacija naše škole</strong></h1>

        {/* Kontakt informacije */}
        <div>
          <h4 style={{ color: 'rgba(39,38,98,255)' }}>Knjaza Miloša 144, 34300 Aranđelovac</h4>
        </div>

        {/* Mapa */}
        <div style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.5978274137721!2d20.681380004014397!3d44.257189724672386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574b8f20986185%3A0x136890f5f0dfbc6a!2sHappy%20Kids%20Center!5e0!3m2!1ssr!2srs!4v1706109770033!5m2!1ssr!2srs"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Lokacija;
