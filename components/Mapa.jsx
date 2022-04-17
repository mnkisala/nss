const map_src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.6149477037407!2d22.856941091781238!3d53.52078923569212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e03b14edfbf5cd%3A0xcf374ae93294abe4!2sStara%20Szko%C5%82a!5e0!3m2!1sen!2spl!4v1616277167963!5m2!1sen!2spl`;

export default function Mapa() {
  return (
    <iframe
      className="kontakty-mapa"
      title="mapa"
      src={map_src}
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
    />
  );
}
