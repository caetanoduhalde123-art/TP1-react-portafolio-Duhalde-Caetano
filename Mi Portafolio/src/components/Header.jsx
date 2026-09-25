function Header({ nombre, profesion }) {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <h1>{nombre}</h1>
      <p>{profesion}</p>
    </header>
  );
}

export default Header;
