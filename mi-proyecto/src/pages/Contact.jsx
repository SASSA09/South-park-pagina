import { useState } from 'react';
import '../styles/Contact.css';

/**
 * Componente de Contacto
 * Implementa un formulario controlado mediante useState con opciones para enviar y resetear,
 * previniendo el comportamiento por defecto y emitiendo los eventos en la consola del navegador.
 */
export const Contact = () => {
  // Estado inicial de los campos del formulario
  const estadoInicial = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  const [formData, setFormData] = useState(estadoInicial);
  const [mensajeEstado, setMensajeEstado] = useState(null);

  // Manejador de cambios en los inputs (muestra eventos en consola)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`[Form Event] Input '${name}' actualizado a:`, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador del envío (submit)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Muestra el evento y los datos capturados en la consola sin conectar a un servidor real
    console.log('[Form Event] Submit ejecutado con éxito. Datos capturados:', formData);

    // Feedback visual en la interfaz
    setMensajeEstado({
      tipo: 'success',
      texto: `¡Gracias por tu mensaje, ${formData.nombre}! Tu consulta ha sido registrada en el frontend.`
    });
  };

  // Manejador del reseteo (reset)
  const handleReset = () => {
    console.log('[Form Event] Formulario reseteado a sus valores iniciales');
    setFormData(estadoInicial);
    setMensajeEstado({
      tipo: 'info',
      texto: 'El formulario ha sido limpiado correctamente.'
    });

    // Ocultar mensaje informativo tras 3 segundos
    setTimeout(() => {
      setMensajeEstado((actual) => (actual?.tipo === 'info' ? null : actual));
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="contact-subtitle">
          ¿Tienes sugerencias o teorías sobre la serie? Envíanos tu mensaje.
        </p>

        {/* Mensaje de feedback en pantalla */}
        {mensajeEstado && (
          <div className={`alert-feedback alert-${mensajeEstado.tipo}`}>
            {mensajeEstado.tipo === 'success' ? '✅' : 'ℹ️'} {mensajeEstado.texto}
          </div>
        )}

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre completo:
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="form-input"
              placeholder="Ej: Eric Cartman"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Ej: tuemail@southpark.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto" className="form-label">
              Asunto:
            </label>
            <input
              id="asunto"
              type="text"
              name="asunto"
              className="form-input"
              placeholder="Ej: Consulta sobre capítulos"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-textarea"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
            <button type="button" className="btn-reset" onClick={handleReset}>
              Resetear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;