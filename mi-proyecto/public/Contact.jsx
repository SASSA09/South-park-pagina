import { useState } from 'react';

export const Contact = () => {
  const initialState = { nombre: '', email: '', mensaje: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Cambiando ${name}:`, value); // Requisito de la consigna
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga por defecto
    console.log('Datos enviados:', formData);
    alert('¡Mensaje enviado con éxito! Revisa la consola.');
  };

  const handleReset = () => {
    console.log('Formulario reseteado');
    setFormData(initialState);
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Enviar</button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Resetear
          </button>
        </div>
      </form>
    </div>
  );
};