import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import lija7 from "../asets/lija7.jpg";

function Kontakti() {
  const form = useRef();
  const [message, setMessage] = useState(""); // Držimo poruku o uspehu/neuspehu
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    telefon: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7ncmwa",
        "template_hhhzm8p",
        form.current,
        "ky_ANbFJkQPypKLIP"
      )
      .then(
        () => {
          setMessage("Poruka je uspešno poslata! ✅");
          setFormData({ user_name: "", user_email: "", telefon: "", message: "" }); // Resetovanje polja
        },
        (error) => {
          setMessage("Slanje poruke nije uspelo. Pokušajte ponovo. ❌");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container mt-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.63)), url(${lija7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="text-center mb-5">
         <h2 className="section-title text-uppercase">Kontaktirajte nas</h2>
      </div>

      <h3 className="section-subtitle mb-4 text-center">Pošaljite nam poruku putem forme</h3>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label><strong>Vaše ime i prezime</strong></label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
        
        <label><strong>Vaša E-mail adresa</strong></label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        
        <label><strong>Broj telefona</strong></label>
        <input type="text" name="telefon" value={formData.telefon} onChange={handleChange} required />
        
        <label><strong>Poruka</strong></label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Pošaljite poruku</button>
      </form>

      {/* Prikaz poruke o uspehu ili grešci */}
      {message && <p style={{ marginTop: "20px", fontSize: "18px", color: message.includes("✅") ? "green" : "red" }}>{message}</p>}
    

    
    
      <h4 className="section-subtitle mt-4 text-center">Naš kontakt</h4>
      <p style={{color:"#c65A28", fontSize: "20px"}}><i className="fas fa-envelope mr-3"></i> fluentfox.ar@gmail.com</p>
    <p style={{color:"#c65A28", fontSize: "20px"}}><i className="fas fa-phone mr-3"></i> 𝟎𝟔𝟒/𝟑𝟏-𝟑𝟕-𝟗𝟗𝟏</p>

      <h4 className="section-subtitle mt-4 text-center">Možete nas pronaći i na društvenim mrežama</h4>
            <div className='footer-sectionIkonice'>
            <a href="https://www.facebook.com/happykidscentertopola?locale=sr_RS" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" style={{ fontSize: '2.1rem', color: '#c65A28' }}></i>
            </a>

            <a href="https://www.instagram.com/fluentfox.ar/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ fontSize: '2.1rem', color: '#c65A28' }}></i>
            </a>
            <a href="https://www.tiktok.com/@fluentfox.ar?_t=8oO53nLJUmM&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaakJjLZKarWc6MKU_hcaRLfOr6l4oK3_sZQkHTqe5ZovN20fitBtn4Cc2g_aem_Qc-SSZZuyYMTgFF3UEGZbw" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok" style={{ fontSize: '2.1rem', color: '#c65A28' }}></i>
            </a>
            </div>
    
            <div className="footer-content">
    
    

    

  </div>
    
    
    
    
    </div>


  );
}

export default Kontakti;
