import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Campo ${name}:`, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Formulario enviado con éxito!');
  };

  const handleReset = () => {
    console.log('Formulario reseteado');
    setFormData({ nombre: '', email: '', mensaje: '' });
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
          <button type="button" className="btn btn-secondary" onClick={handleReset}>Resetear</button>
        </div>
      </form>
    </div>
  );
};