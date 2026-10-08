import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import '../styles/Layout.css';

/**
 * Componente Layout principal
 * Actúa como contenedor esqueleto de la aplicación.
 * Mantiene Navbar y Footer fijos y renderiza las rutas hijas mediante <Outlet />
 */
export const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
