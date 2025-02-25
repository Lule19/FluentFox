import React from "react";
import lija6 from "../asets/lija6.jpg"; // Correctly import the image
import '../App.css';

function Lokacija() {
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
        <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}>Lokacija naseg centra:</h1>

        <div
          className="d-flex justify-content-between"
          style={{
           
            width: "100%",
            maxWidth: "1200px", // Set a maximum width for the layout
            marginTop: "30px",
          }}
        >
          {/* Leva strana - mapa */}
          <div className="col-md-6">
            
            <div align="center" className="lokacija">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.5978274137721!2d20.681380004014397!3d44.257189724672386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574b8f20986185%3A0x136890f5f0dfbc6a!2sHappy%20Kids%20Center!5e0!3m2!1ssr!2srs!4v1706109770033!5m2!1ssr!2srs"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Desna strana - kontakt */}
          <div  className="col-md-6">
          <h6 align="center" className="text-uppercase mb-4 font-weight-bold">Lokacija naše škole</h6>
          <h4 align="center">Knjaza Miloša 144, ARANDJELOVAC</h4>
          <br></br>

            <h6  align="center" className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
            <div align="center">
            <p><i className="fas fa-home mr-3"></i> Arandjelovac, Srbija</p>
            <p><i className="fas fa-envelope mr-3"></i> fluentfox.ar@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> 𝟎𝟔𝟒/𝟑𝟏-𝟑𝟕-𝟗𝟗𝟏</p>
            </div>

            <div className="ikonice">
              <a href="https://www.facebook.com/happykidscentertopola?locale=sr_RS" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" style={{ fontSize: '1.5rem', color: '#3b5998' }}></i>
              </a>
              <a href="https://www.instagram.com/fluentfox.ar/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ fontSize: '1.5rem', color: '#E4405F' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lokacija;
