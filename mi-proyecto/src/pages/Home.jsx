import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Gallery } from '../components/Gallery';
import fondoHeader from '../assets/Fondo.jpg';
import '../styles/Home.css';

// Lista de personajes con imágenes locales verificadas (sin URLs externas caídas)
const personajesPrincipales = [
  {
    id: 1,
    nombre: 'Eric Cartman',
    imagen: '/EricCartman.png',
    episodios: 322,
    badge: 'Protagonista',
    descripcion: 'Líder narcisista y calculador. Creador de gran parte del caos del pueblo.',
    enlace: 'https://es.wikipedia.org/wiki/Eric_Cartman'
  },
  {
    id: 2,
    nombre: 'Stan Marsh',
    imagen: '/StanMarsh.png',
    episodios: 322,
    badge: 'Protagonista',
    descripcion: 'El chico de gorro azul con pompón rojo. Voz de la razón y buen amigo.',
    enlace: 'https://es.wikipedia.org/wiki/Stan_Marsh'
  },
  {
    id: 3,
    nombre: 'Kyle Broflovski',
    imagen: '/KyleBroflovski.png',
    episodios: 322,
    badge: 'Protagonista',
    descripcion: 'Inteligente y ético. Mantiene intensos debates y rivalidad contra Cartman.',
    enlace: 'https://es.wikipedia.org/wiki/Kyle_Broflovski'
  },
  {
    id: 4,
    nombre: 'Kenny McCormick',
    imagen: '/KennyMcCormick.png',
    episodios: 322,
    badge: 'Protagonista',
    descripcion: 'Oculto tras su capucha naranja. El amigo misterioso e inmortal de la pandilla.',
    enlace: 'https://es.wikipedia.org/wiki/Kenny_McCormick'
  },
  {
    id: 5,
    nombre: 'Butters Stotch',
    imagen: '/ButtersStotch.png',
    episodios: 200,
    badge: 'Secundario',
    descripcion: 'Un niño dulce e ingenuo que a menudo carga con la culpa de los demás.',
    enlace: 'https://es.wikipedia.org/wiki/Butters_Stotch'
  },
  {
    id: 6,
    nombre: 'Randy Marsh',
    imagen: '/randy.png',
    episodios: 200,
    badge: 'Adulto',
    descripcion: 'Padre de Stan y geólogo. Siempre lidera las obsesiones más ridículas.',
    enlace: 'https://es.wikipedia.org/wiki/Randy_Marsh'
  },
  {
    id: 7,
    nombre: 'Chef',
    imagen: '/chef.png',
    episodios: 136,
    badge: 'Adulto',
    descripcion: 'Cocinero de la escuela primaria. El mayor consejero con canciones inolvidables.',
    enlace: 'https://es.wikipedia.org/wiki/Chef_(South_Park)'
  },
  {
    id: 8,
    nombre: 'Wendy Testaburger',
    imagen: '/wendy.png',
    episodios: 150,
    badge: 'Secundario',
    descripcion: 'Presidenta de la clase e inteligente activista escolar de fuertes convicciones.',
    enlace: 'https://es.wikipedia.org/wiki/Wendy_Testaburger'
  },
  {
    id: 9,
    nombre: 'Mr. Garrison',
    imagen: '/garrison.png',
    episodios: 180,
    badge: 'Adulto',
    descripcion: 'El maestro escolar más polémico, extravagante e inestable del pueblo.',
    enlace: 'https://es.wikipedia.org/wiki/Herbert_Garrison'
  },
  {
    id: 10,
    nombre: 'Mr. Mackey',
    imagen: '/mackey.png',
    episodios: 170,
    badge: 'Adulto',
    descripcion: 'El consejero escolar que siempre recuerda: "Las drogas son malas, ¿m\'kay?".',
    enlace: 'https://es.wikipedia.org/wiki/South_Park'
  }
];

export const Home = () => {
  return (
    <div>
      {/* BANNER HERO PRINCIPAL */}
      <section
        id="inicio"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${fondoHeader})`
        }}
      >
        <div className="hero-content">
          <h1>South Park</h1>
          <p>
            Explora el universo satírico creado por Trey Parker y Matt Stone.
            Conoce a los personajes, episodios más icónicos y ponte en contacto.
          </p>
          <div className="hero-buttons">
            <Link to="/info" className="btn-saber-mas">
              Creadores
            </Link>
            <Link to="/capitulos" className="btn-hero-secundario">
              Ver Capítulos
            </Link>
            <Link to="/galeria" className="btn-hero-secundario">
              Galería
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN PERSONAJES */}
      <section id="personajes" className="seccion-personajes">
        <div className="seccion-titulo-container">
          <h2>Personajes Principales</h2>
          <p>Los habitantes más destacados del pintoresco pueblo de Colorado.</p>
        </div>

        <div className="contenedor-cards">
          {personajesPrincipales.map((personaje) => (
            <Card
              key={personaje.id}
              nombre={personaje.nombre}
              imagen={personaje.imagen}
              episodios={personaje.episodios}
              descripcion={personaje.descripcion}
              badge={personaje.badge}
              enlace={personaje.enlace}
              textoBoton="Ver en Wikipedia"
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN GALERÍA INTERACTIVA */}
      <Gallery />
    </div>
  );
};

export default Home;