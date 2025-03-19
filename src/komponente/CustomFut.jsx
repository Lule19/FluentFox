import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


import logo2 from "../asets/logo2.jpg";
import "../App.css";

const CustomFut = () => {
  return (
    <footer
      className=" text-lg-start text-white"
      style={{ backgroundColor: '#c65A28', width: '100%' }}
    >
      <div className="container p-4 pb-0">
        <section>
          <div className="row d-flex flex-column flex-md-row">
            {/* Info o školi */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Pratite nas</strong></h6>
              

              <img className="logo"
                        src={logo2}
                        alt="Logo"
                        width="160"
                        height="160"
                    />



              <div className='footer-sectionIkonice'>
    <a href="https://www.facebook.com/happykidscentertopola?locale=sr_RS" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" style={{ fontSize: '2.1rem', color: 'white' }}></i>
                </a>

                <a href="https://www.instagram.com/fluentfox.ar/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" style={{ fontSize: '2.1rem', color: 'white' }}></i>
                </a>
                <a href="https://www.tiktok.com/@fluentfox.ar?_t=8oO53nLJUmM&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaakJjLZKarWc6MKU_hcaRLfOr6l4oK3_sZQkHTqe5ZovN20fitBtn4Cc2g_aem_Qc-SSZZuyYMTgFF3UEGZbw" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok" style={{ fontSize: '2.1rem', color: 'white' }}></i>
                </a>
                </div>




            </div>

            {/* Kontakt */}
            
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-section">
             <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Kontakt</strong></h6>
  <div className="footer-content">
    <p><i className="fas fa-home mr-3"></i> Aranđelovac, Srbija</p>
    <p><i className="fas fa-envelope mr-3"></i> fluentfox.ar@gmail.com</p>
    <p><i className="fas fa-phone mr-3"></i> 𝟎𝟔𝟒/𝟑𝟏-𝟑𝟕-𝟗𝟗𝟏</p>

    

  </div>
</div>

            

            {/* Radno vreme */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
           
              <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Radno vreme</strong></h6>
              <div className="footer-content">
              <p>Ponedeljak: 17:30 - 21:00</p>
              <p>Utorak: 18:30 - 22:00</p>
              <p>Sreda: 11:00 - 19:30</p>
              <p>Četvrtak: 18:30 - 22:00</p>
              <p>Petak: 11:00 - 19:30</p>
              <p>Subota: neradan dan</p>
              <p>Nedelja: neradan dan</p>
            </div>
            </div>
            {/* Lokacija */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 align="center" className="text-uppercase mb-4 font-weight-bold"><strong>Lokacija naše škole</strong></h6>
              <h4 align="center"> Knjaza Miloša 144,  <br></br>34300 Aranđelovac </h4>
              <div align="center" className="lokacija">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.5978274137721!2d20.681380004014397!3d44.257189724672386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574b8f20986185%3A0x136890f5f0dfbc6a!2sHappy%20Kids%20Center!5e0!3m2!1ssr!2srs!4v1706109770033!5m2!1ssr!2srs"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 FluentFox, All Rights Reserved
      </div>
    </footer>
  );
};

export default CustomFut;

