import Gallery from "react-grid-gallery";

export default function Galeria({ tytul, zdjecia }) {
  return (
    <div className="galeria">
      <h1>{tytul}</h1>
      <Gallery images={zdjecia} />
    </div>
  );
}
