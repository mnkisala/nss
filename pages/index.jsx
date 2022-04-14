import Section from "../components/Section";
import HTML from "../components/HTML";
import Head from "next/head";

import Galeria from "../components/Galeria";

import { getStrapiContent, getStrapiText } from "../api_utils";

import React from "react";

export default function Home({ onas, oferta, galerie, cennik }) {
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
          <Cennik data={cennik} />
        </Section>
      </>
    </>
  );
}

export async function getServerSideProps() {
  const cennik = await getStrapiContent("cennik");

  return {
    props: {
      onas: await getStrapiText("o-nas"),
      oferta: await getStrapiText("oferta"),
      cennik,
      galerie: [], // TODO
    },
  };
}

function Cennik({ data }) {
  return (
    <div className="cennik">
      <div className="cennik-tabela">
        {data.map((entry, i) => (
          <React.Fragment key={i}>
            <div className="cennik-komorka cennik-komorka-dark">
              {entry.attributes.nazwa}
            </div>
            <div className="cennik-komorka cennik-komorka-light">
              {entry.attributes.cena}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
