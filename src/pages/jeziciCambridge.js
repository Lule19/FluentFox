import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import lija7 from "../asets/lija7.jpg";
import lija2 from "../asets/lija2.jpg";
import engleski from "../asets/engleski.jpg";
import nemacki from "../asets/nemacki.jpg";
import spanski from "../asets/spanski.jpg";

import "../App.css";

function JeziciCambridge() {
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
        
        <h1 style={{ color: 'rgba(39,38,98,255)', textAlign: 'center' }}><strong>Cambridge ispiti</strong> </h1>
        <br></br>
       <div className="">
       
        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>      
        Naša škola nudi specijalizovanu pripremu za Cambridge ispite za decu i odrasle. Uz podršku naših predavača i savremene metode podučavanja ostvarite izuzetne rezultate na ispitima i unapredite svoje jezičke veštine. 
        Bilo da se pripremate za osnovni ili napredni nivo, naš program je dizajniran da pruži podršku i maksimalnu efikasnost, otvarajući Vam vrata međunarodnih mogućnosti i profesionalnog uspeha.
        </p>
        
        <br></br>
        
        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
  Za više informacija posetite sledeće linkove za detaljan opis svih  
  <a href="https://www.cambridgeenglish.org/exams-and-tests/"className="custom-link"> nivoa ispita
  </a>,  
  <a 
    href="https://www.cambridgeenglish.org/exams-and-tests/first/preparation/"
    className="custom-link"
  > pripremnih materijala
  </a> i 
  <a 
    href="https://www.cambridgeenglish.org/why-choose-us/"
    className="custom-link"
  > informacije
  </a> o tome <a href="https://www.cambridgeenglish.org/why-choose-us/global-recognition/" className="custom-link"> ko
  </a> priznaje sertifikate. Roditelji mogu pronaći korisne materijale i informacije klikom na ovaj 
  <a 
    href="https://www.cambridgeenglish.org/learning-english/parents-and-children/"
    className="custom-link"
  > link
  </a>.
</p>

        <br></br>

        <p style={{ color: 'rgba(39,38,98,255)', fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
        <h4><strong>Deca se mogu pripremiti za sledeće ispite:</strong></h4>
        <br></br>
       
        

        

   
        <strong>Pre A1 Starters</strong> je prvi nivo u seriji Cambridge English ispita za decu, dizajniran da pomogne najmlađim učenicima da razviju osnovne jezičke veštine. 
        Ovaj ispit procenjuje sposobnost razumevanja i korišćenja jednostavnih engleskih fraza i reči u svakodnevnim situacijama

        <br></br>
        <br></br>

        <strong>A1 Movers</strong> je drugi nivo u seriji Cambridge English ispita za decu, 
        namenjen učenicima koji su već stekli osnovno znanje engleskog jezika.
         Pomaže deci da nastave sa razvojem svojih jezičkih sposobnosti, 
         motivišući ih da komuniciraju na engleskom jeziku kroz igru i zabavne aktivnosti.

          <br></br>
          <br></br>

         <strong>A2 Flyers </strong>predstavlja treći nivo ispita za decu u okviru Cambridge English sistema, koji je dizajniran za učenike sa osnovnim poznavanjem engleskog jezika. Ovaj ispit pomaže deci da poboljšaju svoje sposobnosti u govoru, čitanju, pisanju i slušanju, kroz jednostavne, ali efektivne zadatke. Motiviše ih da se izražavaju na engleskom jeziku i steknu veće samopouzdanje u svakodnevnoj komunikaciji.

         <br></br>
         <br></br>

<strong>A2 Key for Schools</strong> je specijano dizajnirana verzija A2 Key ispita. Ovaj ispit je namenjen deci i mladima koji žele da pokažu svoje osnovno poznavanje engleskog jezika i sposobnost da komuniciraju u svakodnevnim situacijama. Kao i standardni A2 Key, A2 Key for Schools testira četiri glavne jezičke veštine: čitanje, pisanje, slušanje i govor, ali je prilagođen uzrastu i interesovanjima školske dece.

<br></br>
<br></br>

<strong>B1 Preliminary for Schools </strong>je ispit engleskog jezika koji je kreiran za učenike uzrasta od 11 do 14 godina. Ovaj ispit testira srednji nivo znanja engleskog jezika (B1) i omogućava mladim kandidatima da pokažu svoje sposobnosti u svakodnevnoj komunikaciji na engleskom jeziku. Ispit je sličan standardnom B1 Preliminary ispitu, ali je prilagođen interesovanjima i potrebama školske dece, sa temama koje su im poznate i relevantne, kao što su škola, hobiji, prijatelji i porodični život.

      <br></br>
      <br></br>

<strong>B2 First for Schools  </strong>je verzija ispita B2 First koja je specijalno dizajnirana za učenike uzrasta od 12 do 17 godina. Ovaj ispit, iako sličan B2 First, obuvata teme i zadatke koji su bliži interesovanjima mladih ljudi, poput školske svakodnevice, prijateljskih odnosa i ličnih interesovanja.

<br></br>
<br></br>
<br></br>
<br></br>
<h4><strong>Odrasli se mogu priremiti za sledeće ispite:</strong></h4>
<br></br>


       
<strong>A2 Key  </strong>je ispit dizajniran za one koji su na početnom nivou engleskog jezika, i pomaže im da potvrde svoje sposobnosti u osnovnoj komunikaciji. Ispit obuhvata veštine poput razumevanja pisanih i govorenih tekstova, kao i sastavljanje jednostavnih poruka i odgovora.
<br></br> 
<br></br>
<strong>B1 Preliminary   </strong>je ispit engleskog jezika koji odgovara srednjem nivou B1. Ispit testira razumevanje jednostavnih tekstova, sposobnost pisanja i razgovora na poznate teme, kao i razumevanje govornog jezika. Kandidati koji polože ovaj ispit mogu efikasno komunicirati u svakodnevnim situacijama, što im omogućava da nastave sa učenjem i pripreme se za sledeće nivoe, poput B2 First.
<br></br>
<br></br>
<strong>B2 First   </strong>je ispit engleskog jezika koji odgovara višem srednjem nivou B2. Namenjen je kandidatima koji žele da potvrde svoju sposobnost da komuniciraju na engleskom jeziku u različitim svakodnevnim i poslovnim situacijama. Ovo je priznati globalni ispit koji se često traži u obrazovnim institucijama i kompanijama. Pruža kandidatu dokaz o jezičkim veštinama i otvara vrata za dalji akademski i profesionalni razvoj.

       
        </p>
        
        
        


        </div>
        </div>
        </div>
  );
}

export default JeziciCambridge;
