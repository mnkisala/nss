import React from "react";
import Head from "next/head";

import { getStrapiContent, getStrapiText } from "../api_utils";

import Section from "../components/Section";
import HTML from "../components/HTML";
import Galeria from "../components/Galeria";
import Mapa from "../components/Mapa";
import Cenniki from "../components/Cenniki";
import ONasGaleria from "../components/ONasGaleria";
import { STRAPI_URL } from "../staraszkola.cfg";

export default function Home({
  nazwaStrony,
  onas,
  oferta,
  galerie,
  cenniki,
  kontakt,
  onasZdjecia,
}) {
  return (
    <>
      <Head>
        <title>{nazwaStrony}</title>
      </Head>

      <>
        <Section id="onas">
          <div className="onas">
            <div className="onas-tekst">
              <HTML content={onas} />
            </div>
            <div className="onas-galeria">
              <ONasGaleria zdjecia={onasZdjecia} />
            </div>
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
          <Cenniki data={cenniki} />
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
  return {
    props: {
      nazwaStrony: await getStrapiText("nazwa-strony"),
      onas: await getStrapiText("o-nas"),
      oferta: await getStrapiText("oferta"),
      kontakt: await getStrapiText("kontakt"),
      cenniki: await getStrapiContent("cennik?populate=ceny"),
      onasZdjecia: await getONasZdjecia(),
      galerie: [], // TODO
    },
  };
}

async function getONasZdjecia() {
  const content = await getStrapiContent("o-nas-galeria?populate=zdjecia");

  const zdjecia = content.attributes.zdjecia.data.map((zdj) => {
    return {
      original: `${STRAPI_URL}/${zdj.attributes.url}`,
      thumbnail: `${STRAPI_URL}/${zdj.attributes.formats.thumbnail.url}`,
    };
  });

  return zdjecia;
}
