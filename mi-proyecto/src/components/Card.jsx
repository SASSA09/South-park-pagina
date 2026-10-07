import '../styles/Card.css';

export const Card = ({ nombre, imagen, episodios }) => {
  return (
    <div className="card">
      <img 
        src={imagen} 
        alt={nombre} 
        className="card-img"
        referrerPolicy="no-referrer" // Permite cargar imágenes de Wikipedia en localhost sin bloqueos
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://dummyimage.com/200x200/00502b/ffffff&text=South+Park";
        }}
      />
      <h3>{nombre}</h3>
      <p>Aparece en {episodios} episodios.</p>
    </div>
  );
};