function Project({ titulo, descripcion }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

function Projects() {
  const proyectos = [
    { titulo: "Pagina de farmacia", descripcion: "Una pagina donde vende medicamentos." },
    { titulo: "Pagina de calendario de tareas", descripcion: "Pagina para gestionar tareas." },
  ];

  return (
    <section>
      <h2>Proyectos</h2>
      {proyectos.map((p, index) => (
        <Project key={index} titulo={p.titulo} descripcion={p.descripcion} />
      ))}
    </section>
  );
}

export default Projects;
