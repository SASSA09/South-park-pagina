import { Link } from 'react-router-dom';

/**
 * Página 404 - Ruta no encontrada
 */
export const NotFound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '5rem 1.5rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <img
        src="/EricCartman.png"
        alt="Cartman 404"
        style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '1.5rem' }}
      />
      <h1 style={{ fontSize: '3rem', color: '#014c2a', fontWeight: '800' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '1rem' }}>
        ¡Oh no! Esta página no existe
      </h2>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Parece que te has perdido por las calles nevadas de South Park.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          backgroundColor: '#014c2a',
          color: '#ffffff',
          padding: '0.75rem 1.75rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '700'
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
