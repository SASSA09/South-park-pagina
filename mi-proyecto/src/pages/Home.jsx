import { Card } from '../components/Card';
import fondoHeader from '../assets/fondo.jpg'; // Si tu imagen es .png, cambiá la extensión a .png
import '../styles/Hero.css';
import '../styles/Home.css';

const personajesPrincipales = [
  {
    id: 1,
    nombre: "Eric Cartman",
    imagen: "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
    episodios: 322
  },
  {
    id: 2,
    nombre: "Stan Marsh",
    imagen: "https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png",
    episodios: 322
  },
  {
    id: 3,
    nombre: "Kyle Broflovski",
    imagen: "https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png",
    episodios: 322
  },
  {
    id: 4,
    nombre: "Kenny McCormick",
    imagen: "https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png",
    episodios: 322
  },
  {
    id: 5,
    nombre: "Butters Stotch",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png",
    episodios: 200
  },
  {
    id: 6,
    nombre: "Randy Marsh",
    imagen: "/randy.png",
    episodios: 200
  },
  {
    id: 7,
    nombre: "Chef",
    imagen: "/chef.png",
    episodios: 136
  },
  {
    id: 8,
    nombre: "Wendy Testaburger",
    imagen: "/wendy.png",
    episodios: 150
  },
  {
    id: 9,
    nombre: "Mr. Garrison",
    imagen: "/garrison.png",
    episodios: 180
  },
  {
    id: 10,
    nombre: "Mr. Mackey",
    imagen: "/mackey.png",
    episodios: 170
  }
];

export const Home = () => {
  return (
    <div>
      {/* BANNER PRINCIPAL */}
      <section 
        id="inicio" 
        className="hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondoHeader})` 
        }}
      >
        <div className="hero-content">
          <h1>South Park</h1>
          <p>Descubre todo sobre los personajes y capítulos de South Park.</p>
          <a 
            href="https://es.wikipedia.org/wiki/South_Park" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-saber-mas"
          >
            Saber más
          </a>
        </div>
      </section>

      {/* SECCIÓN PERSONAJES */}
      <section id="personajes" className="seccion-personajes">
        <h2>Personajes Principales</h2>
        <div className="contenedor-cards">
          {personajesPrincipales.map((personaje) => (
            <Card
              key={personaje.id}
              nombre={personaje.nombre}
              imagen={personaje.imagen}
              episodios={personaje.episodios}
            />
          ))}
        </div>
      </section>
    </div>
  );
};