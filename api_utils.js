import { STRAPI_URL } from "./staraszkola.cfg";
import axios from "axios";

export async function getStrapiText(key) {
    return await getStrapiContent(key)
        .then((data) => data.attributes.tekst)
        // .catch((_) => `<em>${key}</em>`);
        .catch((e) => `${e}`);
}

export async function getStrapiContent(key) {
    const url = `${STRAPI_URL}/api/${key}`;
    let content = null;
    try {
        const res = await axios.get(url);
        content = res.data.data;
    } catch (e) {
        console.log(`Failed to get strapi content with key: ${key}`);
        throw e;
    }

    return content;
}


// TODO
export async function fetchujGalerie() {
    try {
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

            return {
                tytul,
                zdjecia,
            };
        });
    } catch {
        return [];
    }
}