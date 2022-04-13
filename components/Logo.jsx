import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-header-container">
        <div className="logo-header-container-text-logo">Stara Szkoła</div>
        <div className="logo-header-container-description">
          {" "}
          noclegi nad Biebrzą{" "}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="logo" className="logo-image" />
    </div>
  );
}
