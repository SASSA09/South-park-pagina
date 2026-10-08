import { Link } from 'react-router-dom';
import '../styles/Footer.css';

/**
 * Componente Footer reutilizable
 * Muestra enlaces rápidos a las secciones de la app y créditos académicos
 */
export const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/#personajes">Personajes</Link>
          </li>
          <li>
            <Link to="/galeria">Galería</Link>
          </li>
          <li>
            <Link to="/capitulos">Capítulos</Link>
          </li>
          <li>
            <Link to="/info">Creadores</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        <div className="footer-divider" />

        <p className="footer-copy">
          © {new Date().getFullYear()} South Park Fan Page — Trabajo Práctico Final UTN
        </p>
      </div>
    </footer>
  );
};

export default Footer;