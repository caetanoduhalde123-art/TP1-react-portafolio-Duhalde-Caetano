import { useState } from "react";

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section>
      <h2>Sobre mí</h2>
      <p>Soy estudiante de programación y me interesa el desarrollo web.</p>
      {mostrarMas && (
        <p>
          Además, me apasiona aprender nuevas tecnologías y trabajar en proyectos
          creativos.
        </p>
      )}
      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}

export default About;
