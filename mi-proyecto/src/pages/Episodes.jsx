import '../styles/Episodes.css';

/**
 * Página de Episodios
 * Muestra capítulos destacados de la serie con sinopsis y botones para reproducir en South Park oficial.
 */
export const Episodes = () => {
  const episodiosDestacados = [
    {
      id: 1,
      temporada: 'Temporada 10 • Ep. 8',
      titulo: 'Make Love, Not Warcraft',
      sinopsis:
        'Los chicos pasan días enteros jugando World of Warcraft para derrotar a un jugador de nivel superior que amenaza con arruinar el juego.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    },
    {
      id: 2,
      temporada: 'Temporada 5 • Ep. 4',
      titulo: 'Scott Tenorman Must Die',
      sinopsis:
        'Tras ser engañado por Scott Tenorman, Eric Cartman maquina una de las venganzas más oscuras y famosas en la historia de la televisión.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    },
    {
      id: 3,
      temporada: 'Temporada 8 • Ep. 1',
      titulo: 'Good Times with Weapons',
      sinopsis:
        'Los chicos compran armas ninja de artes marciales en un mercado y se imaginan convertidos en guerreros anime con consecuencias imprevistas.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    },
    {
      id: 4,
      temporada: 'Temporada 8 • Ep. 5',
      titulo: 'AWESOM-O',
      sinopsis:
        'Cartman se disfraza de robot para espiar a Butters y descubrir sus secretos, pero pronto se da cuenta de que la mentira se le escapa de las manos.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    },
    {
      id: 5,
      temporada: 'Temporada 7 • Ep. 11',
      titulo: 'Casa Bonita',
      sinopsis:
        'Kyle invita a Butters a su fiesta en el restaurante Casa Bonita, y Cartman hará lo impensable para conseguir que lo inviten a él en su lugar.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    },
    {
      id: 6,
      temporada: 'Temporada 6 • Ep. 13',
      titulo: 'The Return of the Fellowship',
      sinopsis:
        'Los chicos juegan a El Señor de los Anillos intentando devolver una cinta de video a la tienda, enfrentando épicos desafíos en su camino.',
      enlace: 'https://www.southpark.lat/seasons/south-park'
    }
  ];

  return (
    <div className="episodes-page">
      <header className="episodes-header">
        <h1>Capítulos Icónicos</h1>
        <p>Una selección de los episodios más aclamados y emblemáticos de South Park.</p>
      </header>

      {/* Banner con enlace oficial */}
      <div className="episodes-banner">
        <div className="episodes-banner-text">
          <h3>¿Quieres ver todos los episodios completos?</h3>
          <p>Disponibles de forma oficial en el sitio de South Park Digital Studios.</p>
        </div>
        <a
          href="https://www.southpark.lat/seasons/south-park"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-official-stream"
        >
          Ver en SouthPark.lat ↗
        </a>
      </div>

      {/* Grilla de Episodios */}
      <section className="episodes-grid">
        {episodiosDestacados.map((ep) => (
          <article key={ep.id} className="episode-card">
            <span className="episode-badge">{ep.temporada}</span>
            <h3 className="episode-title">{ep.titulo}</h3>
            <p className="episode-synopsis">{ep.sinopsis}</p>
            <a
              href={ep.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-watch-episode"
            >
              Ver Episodio Oficial ↗
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Episodes;