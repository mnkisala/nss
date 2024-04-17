import React from "react";

export default function Cenniki({ data }) {
  return (
    <>
      {data.map((cennik, i) => {
        return (
          <div key={i} className="cennik">
            <h1 className="header">{cennik.attributes.nazwa}</h1>
            <div style="display: flex; justify-content: center; align-items: center">Cennik dostępny na <a href="https://www.booking.com/hotel/pl/noclegi-nad-biebrza-stara-szkola.pl.html"> booking.com </a></div>
          </div>
        );
      })}
    </>
  );
}
