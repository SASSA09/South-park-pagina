import '../styles/Card.css';

/**
 * Componente Card reutilizable
 * Muestra información de personajes, creadores o episodios con soporte para props flexibles,
 * control de errores en imágenes y botón interactivo opcional.
 */
export const Card = ({
  nombre,
  titulo,
  imagen,
  episodios,
  descripcion,
  enlace,
  textoBoton = 'Ver más',
  badge,
  onBotonClick,
}) => {
  const tituloFinal = nombre || titulo || 'Sin título';
  const descripcionFinal = descripcion || (episodios ? `Aparece en ${episodios} episodios.` : '');

  return (
    <article className="card-item">
      <div className="card-image-wrapper">
        <img
          src={imagen}
          alt={tituloFinal}
          className="card-img-content"
          loading="lazy"
          onError={(e) => {
            // Fallback ante cualquier error de red o URL rota
            e.target.onerror = null;
            e.target.src = '/EricCartman.png';
          }}
        />
      </div>

      {badge && <span className="card-badge">{badge}</span>}

      <h3 className="card-title">{tituloFinal}</h3>

      {descripcionFinal && <p className="card-description">{descripcionFinal}</p>}

      {enlace ? (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn"
        >
          {textoBoton}
        </a>
      ) : onBotonClick ? (
        <button
          type="button"
          onClick={onBotonClick}
          className="card-btn"
        >
          {textoBoton}
        </button>
      ) : null}
    </article>
  );
};

export default Card;