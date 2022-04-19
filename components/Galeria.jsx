import Gallery from "react-grid-gallery";
import Image from "next/image";
import { useState } from "react";

/*
export default function Galeria({ tytul, zdjecia }) {
  return (
    <div className="galeria">
      <h1>{tytul}</h1>
      <Gallery images={zdjecia} />
    </div>
  );
}
*/

export default function Galeria({ tytul, zdjecia }) {
  let [fsGaleria, setFsGaleria] = useState({ show: false, pos: 0 });

  return (
    <>
      {fsGaleria.show && (
        <FullScreenGaleria
          zdjecia={zdjecia}
          start_pos={fsGaleria.pos}
          close={() => setFsGaleria({ show: false, pos: 0 })}
        />
      )}

      <div className="galeria-container">
        <h1>{tytul}</h1>
        <div className="galeria">
          {zdjecia.map((z, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setFsGaleria({ show: true, pos: i });
                }}
                className="galeria-zdjecie"
              >
                <Image
                  src={z.src}
                  alt={z.src}
                  width={z.thumbnailWidth}
                  height={z.thumbnailHeight}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Galerie({ galerie }) {
  return (
    <div className="galerie">
      {galerie.map((g, i) => (
        <Galeria key={i} tytul={g.nazwa} zdjecia={g.zdjecia} />
      ))}
    </div>
  );
}

function FullScreenGaleria({ zdjecia, start_pos, close }) {
  const [pos, setPos] = useState(start_pos);

  return (
    <div className="fs-galeria">
      <div className="fs-galeria-zamknij">
        <button onClick={close}>x</button>
      </div>

      <div className="fs-galeria-zdjecie">
        <Image
          src={zdjecia[pos].src}
          alt={zdjecia[pos].src}
          width={zdjecia[pos].thumbnailWidth}
          height={zdjecia[pos].thumbnailHeight}
        />
      </div>

      <div className="fs-galeria-strzalki">
        <p>
          {pos + 1} / {zdjecia.length}
        </p>

        <div className="">
          <button
            className="fs-galeria-strzalka"
            onClick={() => setPos(pos == 0 ? zdjecia.length - 1 : pos - 1)}
          >
            {"<"}
          </button>
          <button
            className="fs-galeria-strzalka"
            onClick={() => setPos((pos + 1) % zdjecia.length)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
