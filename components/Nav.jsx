const elements = [
  {
    name: "O nas",
    to: "#onas",
  },
  {
    name: "Oferta",
    to: "#oferta",
  },
  {
    name: "Galeria",
    to: "#galeria",
  },
  /*
  {
    name: "Okolica",
    to: "#okolica",
  },
  */
  {
    name: "Cennik",
    to: "#cennik",
  },
  {
    name: "Kontakt",
    to: "#kontakt",
  },
];

function Links() {
  return (
    <>
      {elements.map((el, i) => (
        <li className="nav-item" key={i}>
          <a href={el.to}>{el.name}</a>
        </li>
      ))}
    </>
  );
}

export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <Links />
      </ul>
      <Dropdown />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="nav-dropdown-button">
      <div className="nav-dropdown-button-container">
        <div className="nav-dropdown-button-bar"></div>
        <div className="nav-dropdown-button-bar"></div>
        <div className="nav-dropdown-button-bar"></div>
      </div>

      <ul className="nav-dropdown-list">
        <Links />
      </ul>
    </div>
  );
}
