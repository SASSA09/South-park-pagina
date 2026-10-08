import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Episodes } from './pages/Episodes';
import { Contact } from './pages/Contact';
import { GalleryPage } from './pages/GalleryPage';
import { NotFound } from './pages/NotFound';

/**
 * Componente principal App
 * Define el enrutamiento con React Router usando Layout como contenedor base
 * y <Outlet /> para renderizar dinámicamente cada página hija.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="personajes" element={<Home />} />
        <Route path="info" element={<About />} />
        <Route path="creadores" element={<About />} />
        <Route path="capitulos" element={<Episodes />} />
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;