export default function Section({ children, id, padded }) {
  return (
    <>
      <div id={id} className="nav-point" />
      <div className={`section ${padded && "padding"}`}> {children} </div>
    </>
  );
}

Section.defaultProps = {
  padded: false,
};
