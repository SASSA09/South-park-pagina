import { useState } from 'react';
import '../styles/Gallery.css';

const itemsDefecto = [
  {
    id: 1,
    titulo: 'Eric Cartman',
    categoria: 'principales',
    imagen: '/EricCartman.png',
    descripcion: 'Líder autoproclamado y maestro de la manipulación. Famoso por su clásica frase: "¡Respeta mi autoridad!".'
  },
  {
    id: 2,
    titulo: 'Stan Marsh',
    categoria: 'principales',
    imagen: '/StanMarsh.png',
    descripcion: 'El chico del gorro azul. Es reflexivo, maduro y usualmente representa el sentido común del grupo.'
  },
  {
    id: 3,
    titulo: 'Kyle Broflovski',
    categoria: 'principales',
    imagen: '/KyleBroflovski.png',
    descripcion: 'El niño de la ushanka verde. De fuertes convicciones éticas y eterno rival de los planes absurdos de Cartman.'
  },
  {
    id: 4,
    titulo: 'Kenny McCormick',
    categoria: 'principales',
    imagen: '/KennyMcCormick.png',
    descripcion: 'Inconfundible por su abrigo naranja con capucha. Es conocido por sobrevivir a incontables catástrofes.'
  },
  {
    id: 5,
    titulo: 'Butters Stotch',
    categoria: 'secundarios',
    imagen: '/ButtersStotch.png',
    descripcion: 'El alma más pura e inocente de South Park. Siempre optimista pese a ser castigado injustamente.'
  },
  {
    id: 6,
    titulo: 'Wendy Testaburger',
    categoria: 'secundarios',
    imagen: '/wendy.png',
    descripcion: 'Líder estudiantil, inteligente y comprometida con causas sociales y el feminismo en la primaria.'
  },
  {
    id: 7,
    titulo: 'Randy Marsh',
    categoria: 'adultos',
    imagen: '/randy.png',
    descripcion: 'Geólogo y padre de Stan. Se obsesiona apasionadamente con cualquier moda extravagante que llegue al pueblo.'
  },
  {
    id: 8,
    titulo: 'Chef (Jerome McElroy)',
    categoria: 'adultos',
    imagen: '/chef.png',
    descripcion: 'El legendario cocinero escolar que guiaba a los chicos con canciones de soul y sabiduría callejera.'
  },
  {
    id: 9,
    titulo: 'Sr. Garrison',
    categoria: 'adultos',
    imagen: '/garrison.png',
    descripcion: 'El maestro escolar de primaria más imprevisible y caótico de todo Colorado.'
  },
  {
    id: 10,
    titulo: 'Sr. Mackey',
    categoria: 'adultos',
    imagen: '/mackey.png',
    descripcion: 'Consejero estudiantil de la escuela primaria. Inconfundible por su muletilla "¿m\'kay?".'
  },
  {
    id: 11,
    titulo: 'Trey Parker',
    categoria: 'creadores',
    imagen: '/trey.jpg',
    descripcion: 'Co-creador, director y la inconfundible voz de Stan Marsh y Eric Cartman.'
  },
  {
    id: 12,
    titulo: 'Matt Stone',
    categoria: 'creadores',
    imagen: '/matt.jpg',
    descripcion: 'Co-creador, guionista y la voz detrás de Kyle Broflovski, Kenny McCormick y Butters.'
  }
];

/**
 * Componente Gallery reutilizable
 * Muestra una galería interactiva con filtrado por categorías y vista ampliada (lightbox/modal)
 * gestionada mediante useState.
 */
export const Gallery = ({ items = itemsDefecto }) => {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  // Filtrado de elementos
  const itemsFiltrados = filtroActivo === 'todos'
    ? items
    : items.filter((item) => item.categoria === filtroActivo);

  const categorias = [
    { key: 'todos', label: 'Todos' },
    { key: 'principales', label: 'Principales' },
    { key: 'secundarios', label: 'Secundarios' },
    { key: 'adultos', label: 'Adultos' },
    { key: 'creadores', label: 'Creadores' }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Galería de South Park</h2>
        <p>Explora a los personajes y creadores más memorables del universo de South Park.</p>
      </div>

      {/* Botones de Filtro Interactivos */}
      <div className="gallery-filters">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`filter-btn ${filtroActivo === cat.key ? 'active' : ''}`}
            onClick={() => {
              console.log(`[Gallery Filter] Filtro cambiado a: ${cat.label}`);
              setFiltroActivo(cat.key);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grilla de la Galería */}
      <div className="gallery-grid">
        {itemsFiltrados.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => {
              console.log(`[Gallery Click] Abriendo detalle de: ${item.titulo}`);
              setItemSeleccionado(item);
            }}
          >
            <div className="gallery-thumbnail">
              <img
                src={item.imagen}
                alt={item.titulo}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/EricCartman.png';
                }}
              />
            </div>
            <div className="gallery-info">
              <h4>{item.titulo}</h4>
              <span>{item.categoria}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox Interactivo */}
      {itemSeleccionado && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setItemSeleccionado(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setItemSeleccionado(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <div className="modal-image-container">
              <img
                src={itemSeleccionado.imagen}
                alt={itemSeleccionado.titulo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/EricCartman.png';
                }}
              />
            </div>
            <div className="modal-details">
              <h3>{itemSeleccionado.titulo}</h3>
              <p>{itemSeleccionado.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
