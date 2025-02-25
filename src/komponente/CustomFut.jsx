import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CustomFut = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: '#c65A28', width: '100%' }}
    >
      <div className="container p-4 pb-0">
        <section>
          <div className="row d-flex flex-column flex-md-row">
            {/* Info o školi */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Škola jezika</h6>
              <p>
                Naša škola jezika nudi kurseve za sve uzraste i nivoe. Učimo engleski, nemački, španski, i mnoge druge jezike. Pridružite nam se i unapredite svoje jezičke veštine u opuštenoj atmosferi!
              </p>
            </div>

            {/* Kontakt */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
              <p><i className="fas fa-home mr-3"></i> Arandjelovac, Srbija</p>
              <p><i className="fas fa-envelope mr-3"></i> fluentfox.ar@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> 𝟎𝟔𝟒/𝟑𝟏-𝟑𝟕-𝟗𝟗𝟏</p>

              <div className="ikonice">
                <a href="https://www.facebook.com/happykidscentertopola?locale=sr_RS" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" style={{ fontSize: '1.5rem', color: '#3b5998' }}></i>
                </a>
                <a href="https://www.instagram.com/fluentfox.ar/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" style={{ fontSize: '1.5rem', color: '#E4405F' }}></i>
                </a>
              </div>
            </div>

            {/* Radno vreme */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Radno vreme</h6>
              <p>Ponedeljak: 17:30 - 21:00č</p>
              <p>Utorak: 18:30 - 22:00č</p>
              <p>Sreda: 11:00 - 19:00č</p>
              <p>Četvrtak: 18:30 - 22:00č</p>
              <p>Petak: 11:00 - 19:00č</p>
              <p>Subota: Zatvoreno</p>
              <p>Nedelja: Zatvoreno</p>
            </div>

            {/* Lokacija */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 align="center" className="text-uppercase mb-4 font-weight-bold">Lokacija naše škole</h6>
              <h4 align="center"> Knjaza Miloša 144, ARANDJELOVAC</h4>
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

