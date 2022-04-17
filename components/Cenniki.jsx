import React from "react";

export default function Cenniki({ data }) {
  return (
    <>
      {data.map((cennik, i) => {
        return (
          <div key={i} className="cennik">
            <h1 className="header">{cennik.attributes.nazwa}</h1>

            <div className="cennik-tabela">
              {cennik.attributes.ceny.map((entry, i) => (
                <React.Fragment key={i}>
                  <div className="cennik-komorka cennik-komorka-dark">
                    {entry.produkt}
                  </div>
                  <div className="cennik-komorka cennik-komorka-light">
                    {entry.cena}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
