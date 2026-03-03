import React from "react";
import lija7 from "../asets/lija7.jpg";

import "../App.css";

function JeziciIelts() {
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

         
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
        }}
      >
        <div className="text-center mb-5">
           <h2 className="section-title text-uppercase">IELTS ispiti</h2>
        </div>
        <br></br>
       <div className="text-justify-custom">
       
        <p>      
        Pripremite se za <strong>Academic</strong> i <strong>General Training IELTS</strong> ispite u našoj školi i otvorite vrata ka studijama, poslu ili migraciji u inostranstvu. Ovaj test meri vašu sposobnost da koristite engleski jezik u stvarnim situacijama i priznat je širom sveta.
        </p>

        <br></br>
        
        <h4 className="section-subtitle"><strong>Za koga je IELTS?</strong></h4>
        <ul>
          <li>Za studente koji žele da studiraju na univerzitetima u inostranstvu</li>
          <li>Za profesionalce koji planiraju karijeru ili sertifikaciju u engleskom govornom području</li>
          <li>Za sve koji žele da provere i unaprede svoj nivo engleskog jezika</li>
        </ul>

        <br></br>

        <h4 className="section-subtitle"><strong>Kako se polaže?</strong></h4>
        <p>IELTS se sastoji od četiri dela:</p>
        <ul>
          <li><strong>Listening</strong> – razumevanje slušanjem</li>
          <li><strong>Reading</strong> – čitanje i razumevanje tekstova</li>
          <li><strong>Writing</strong> – pisani izražaj</li>
          <li><strong>Speaking</strong> – razgovor sa ispitivačem</li>
        </ul>

        <br></br>
        
        <p>Postoje dva načina polaganja:</p>
        <ul>
          <li><strong>U British Council centrima</strong> – polaganje sa ovlašćenim nadzorom i standardnom procedurom.</li>
          <li><strong>Online kod kuće ili u našoj školi</strong> – IELTS Home Edition / IELTS Indicator omogućava polaganje u kontrolisanom okruženju, a naša škola može da obezbedi prostor i tehničku podršku.</li>
        </ul>

        <br></br>

        <h4 className="section-subtitle"><strong>Ocenjivanje i rezultat</strong></h4>
        <p>Svaki deo ispita (Listening, Reading, Writing, Speaking) ocenjuje se od 0 do 9 po skali.</p>
        <p>Konačni rezultat je prosečna ocena svih delova, izražena u celobrojnom ili polu-bodu (npr. 6.5).</p>
        <p>Listening i Reading deo se ocenjuje na osnovu broja tačnih odgovora, dok se Writing i Speaking ocenjuju prema jasno definisanim kriterijumima:</p>
        <ul>
          <li>Jasnoća i koherencija izraza</li>
          <li>Gramatička i leksička preciznost</li>
          <li>Sposobnost strukturiranja odgovora i argumentacije</li>
        </ul>

        <br></br>

        <h4 className="section-subtitle"><strong>Priprema u našoj školi</strong></h4>
        <p>Naši programi su osmišljeni tako da Vas ciljano pripreme za svaki deo ispita:</p>
        <ul>
            <li><strong>Uživo ili online časovi</strong> – fleksibilni termini prilagođeni Vašem rasporedu.</li>
            <li><strong>Individualna i grupna nastava</strong> – birate pristup koji Vam najviše odgovara.</li>
            <li><strong>Praktične vežbe i simulacije ispita</strong> – vežbate zadatke iz stvarnih IELTS testova.</li>
            <li><strong>Personalizovani feedback</strong> – predavači prate Vaš napredak i daju konkretne savete za poboljšanje.</li>
        </ul>

        <br></br>

        <h4 className="section-subtitle"><strong>Sertifikat i trajanje</strong></h4>
        <p>Nakon polaganja, rezultati se obično objavljuju 13 dana od datuma ispita za standardni test i nešto brže za online verziju.</p>
        <p>Svi polaznici dobijaju sertifikat koji je međunarodno priznat i pokazuje ocene iz sva četiri dela ispita.</p>
        <p>Sertifikat važi dve godine, što je standardni period priznavanja rezultata od strane univerziteta i poslodavaca.</p>

        <br></br>

        <h4 className="section-subtitle"><strong>Više informacija</strong></h4>
        <p>
          Za detalje o samom ispitu, pravilima i opcijama polaganja posetite British Council zvanični IELTS sajt 
          <a href="https://www.britishcouncil.rs/exam/ielts/dates-fees-locations" className="custom-link ms-1" target="_blank" rel="noopener noreferrer">
             ovde
          </a>.
        </p>

        </div>
        
        
        


        </div>
        </div>
  );
}

export default JeziciIelts;
