import Section from "../components/Section";
import HTML from "../components/HTML";
import Galeria from "../components/Galeria";
import Mapa from "../components/Mapa";

import Head from "next/head";

import { getStrapiContent, getStrapiText } from "../api_utils";

import React from "react";

export default function Home({ onas, oferta, galerie, cennik, kontakt }) {
  return (
    <>
      <Head>
        <title>Noclegi Stara Szkoła nad Biebrzą</title>
      </Head>

      <>
        <Section id="onas">
          <div className="padding">
            <HTML content={onas} />
          </div>
        </Section>

        <Section padded id="oferta">
          <HTML content={oferta} />
        </Section>

        <Section padded id="galeria">
          {galerie.map((g, i) => (
            <Galeria key={i} tytul={g.tytul} zdjecia={g.zdjecia} />
          ))}
        </Section>

        <Section padded id="cennik">
          <Cenniki data={cennik} />
        </Section>

        <Section id="kontakt">
          <div className="kontakty">
            <div className="padding kontakty-tekst">
              <HTML content={kontakt} />
            </div>
            <Mapa />
          </div>
        </Section>
      </>
    </>
  );
}

export async function getServerSideProps() {
  const cennik = await getStrapiContent("cennik?populate=ceny");

  return {
    props: {
      onas: await getStrapiText("o-nas"),
      oferta: await getStrapiText("oferta"),
      kontakt: await getStrapiText("kontakt"),
      cennik,
      galerie: [], // TODO
    },
  };
}

function Cenniki({ data }) {
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
