import '../styles/About.css';

/**
 * Página About / Creadores
 * Presenta a Trey Parker y Matt Stone con sus imágenes locales y enlaces a sus biografías.
 */
export const About = () => {
  const creadores = [
    {
      id: 1,
      nombre: 'Trey Parker',
      rol: 'Co-creador, Director, Guionista y Actor de Voz',
      imagen: '/trey.jpg',
      descripcion:
        'Randolph Severn "Trey" Parker III es un animador, director, guionista y actor estadounidense. Da voz a Stan Marsh, Eric Cartman, Randy Marsh y al Sr. Garrison. Ha ganado múltiples premios Emmy y un premio Tony.',
      wikiUrl: 'https://es.wikipedia.org/wiki/Trey_Parker'
    },
    {
      id: 2,
      nombre: 'Matt Stone',
      rol: 'Co-creador, Productor, Guionista y Actor de Voz',
      imagen: '/matt.jpg',
      descripcion:
        'Matthew Richard "Matt" Stone es un animador, guionista, productor y músico estadounidense. Presta su voz a Kyle Broflovski, Kenny McCormick y Butters Stotch, además de co-crear el aclamado musical The Book of Mormon.',
      wikiUrl: 'https://es.wikipedia.org/wiki/Matt_Stone'
    }
  ];

  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Mentes Maestras Detrás de South Park</h1>
        <p>
          Conoce a los creadores de una de las comedias satíricas animadas más longevas e influyentes de la televisión contemporánea.
        </p>
      </header>

      <section className="creadores-grid">
        {creadores.map((creador) => (
          <article key={creador.id} className="card-creador">
            <img
              src={creador.imagen}
              alt={creador.nombre}
              className="card-creador-img"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/EricCartman.png';
              }}
            />
            <h3>{creador.nombre}</h3>
            <span className="card-creador-role">{creador.rol}</span>
            <p>{creador.descripcion}</p>
            <a
              href={creador.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creador"
            >
              Ver biografía en Wikipedia
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default About;