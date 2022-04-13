import Content from "../components/Content";
import HTML from "../components/HTML";
import Head from "next/head";

import { STRAPI_URL } from "../staraszkola.cfg";

import axios from "axios";

import style from "./index.module.scss";

import Gallery from "react-grid-gallery";

export default function Home({ onas, oferta, galerie }) {
  return (
    <>
      <Head>
        <title>Noclegi Stara Szkoła nad Biebrzą</title>
      </Head>

      <div id="onas" className="nav-point" />
      <Content>
        <HTML content={onas} className={style.onas} />
      </Content>

      <div id="oferta" className="nav-point" />
      <Content>
        <HTML content={oferta} className={style.oferta} />
      </Content>

      <div id="galeria" className="nav-point" />
      <Content>
        {galerie.map((g, i) => (
          <Galeria key={i} tytul={g.tytul} zdjecia={g.zdjecia} />
        ))}
      </Content>
    </>
  );
}

function Galeria({ tytul, zdjecia }) {
  return (
    <div className="galeria">
      <h1>{tytul}</h1>
      <Gallery images={zdjecia} />
    </div>
  );
}

export async function getServerSideProps() {
  const onas = (await axios.get(`${STRAPI_URL}/api/o-nas`)).data.data.attributes
    .opis;
  const oferta = (await axios.get(`${STRAPI_URL}/api/oferta`)).data.data
    .attributes.Tekst;
  const galerie = await fetchujGalerie();

  return {
    props: {
      onas,
      oferta,
      galerie,
    },
  };
}

async function fetchujGalerie() {
  const galerie = (
    await axios.get(`${STRAPI_URL}/api/galerias?populate=zdjecia`)
  ).data.data;

  return galerie.map((galeria) => {
    const tytul = galeria.attributes.tytul;
    const zdjecia = galeria.attributes.zdjecia.data.map((z) => {
      const src = STRAPI_URL + z.attributes.url;
      const SCALE = 720;
      const [width, height] = [z.attributes.width, z.attributes.height];
      const ratio = width / height;

      return {
        src,
        thumbnail: src,
        thumbnailWidth: SCALE * ratio,
        thumbnailHeight: SCALE,
      };
    });

    /*
  const zdj = zdjecia.map((z) => ({
    src: z.attributes.url,
    thumbnail: STRAPI_URL + z.attributes.url,
    thumbnailWidth: 100,
    thumbnailHeight: 100,
  }));
  */

    return {
      tytul,
      zdjecia,
    };
  });
}
