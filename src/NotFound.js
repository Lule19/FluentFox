import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px", marginBottom:"120px" }}>
      <h1>404 - Stranica nije pronađena</h1>
      <p>Izgleda da stranica koju tražite ne postoji.</p>
      <a href="/" style={{ color: "blue" }}>Vrati se na početnu stranicu</a>
    </div>
  );
};

export default NotFound;
