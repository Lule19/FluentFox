import React from "react";
import lija6 from "../asets/lija6.jpg"; // Correctly import the image
import lija7 from "../asets/lija7.jpg";
import '../App.css';

function Lokacija() {
  return (
    <div className="font">
      <div
        className="container mt-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "130vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centriranje sadržaja
          textAlign: "center", // Tekst centriran
        }}
      >
        <h1 style={{ color: 'rgba(39,38,98,255)' }}><strong>Lokacija našeg centra</strong></h1>

        {/* Kontakt informacije - prvo */}
        <div
          
        >
         
          <h4 style={{ color: 'rgba(39,38,98,255)' }}>Knjaza Miloša 144, 34300 Aranđelovac</h4>
          

          

          {/* Ikonice za društvene mreže */}
         
        </div>

        {/* Mapa - ispod */}
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
