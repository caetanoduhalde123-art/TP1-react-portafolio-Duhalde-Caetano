const habilidades = ["C#","SQL","JavaScript", "React", "Git", "HTML", "CSS"];

function Skills() {
  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
