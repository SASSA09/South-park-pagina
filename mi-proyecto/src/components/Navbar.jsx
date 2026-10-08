import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

/**
 * Componente Navbar reutilizable
 * Proporciona navegación entre rutas con React Router y soporte para menú móvil
 */
export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const alternarMenu = () => {
    setMenuAbierto((prev) => !prev);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  // Manejo de navegación a la sección de personajes (#personajes)
  const irAPersonajes = (e) => {
    e.preventDefault();
    cerrarMenu();

    if (location.pathname === '/') {
      const elemento = document.getElementById('personajes');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#personajes');
      // Dar tiempo a la navegación para hacer el scroll
      setTimeout(() => {
        const elemento = document.getElementById('personajes');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="navbar-custom">
      <Link to="/" className="logo-container" onClick={cerrarMenu}>
        <img
          src="/EricCartman.png"
          alt="Cartman"
          className="logo-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/favicon.svg';
          }}
        />
        <span>South Park</span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={alternarMenu}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuAbierto}
      >
        ☰
      </button>

      <nav className={`nav-links ${menuAbierto ? 'open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          onClick={cerrarMenu}
        >
          Inicio
        </NavLink>

        <a
          href="/#personajes"
          className="nav-item-link"
          onClick={irAPersonajes}
        >
          Personajes
        </a>

        <NavLink
          to="/galeria"
          className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          onClick={cerrarMenu}
        >
          Galería
        </NavLink>

        <NavLink
          to="/capitulos"
          className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          onClick={cerrarMenu}
        >
          Capítulos
        </NavLink>

        <NavLink
          to="/info"
          className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          onClick={cerrarMenu}
        >
          Creadores
        </NavLink>

        <NavLink
          to="/contacto"
          className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          onClick={cerrarMenu}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;