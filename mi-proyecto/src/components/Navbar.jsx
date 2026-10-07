import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png"
          alt="Cartman"
          className="logo-favi"
        />
        <span>South Park</span>
      </Link>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <a href="#personajes">Personajes</a>
        <a href="https://www.southpark.lat/seasons/south-park" target="_blank" rel="noopener noreferrer">
          Capítulos
        </a>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};