import { Gallery } from '../components/Gallery';

/**
 * Página dedicada a la Galería
 * Permite acceder a la galería interactiva a través de su propia ruta en React Router (/galeria)
 */
export const GalleryPage = () => {
  return (
    <div style={{ padding: '1rem 0' }}>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
