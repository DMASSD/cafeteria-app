import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }
    alert(`Gracias ${form.nombre}, tu mensaje ha sido enviado correctamente.`);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contacto</h2>

      <div className="contact-grid">
        <aside className="contact-info" aria-label="información de contacto">
          <h3>Datos de contacto</h3>
          <p><strong>Dirección:</strong> Calle Paseo Niños Héroes 29, Las Campanas, Centro, 76010 Santiago de Querétaro, Qro.</p>
          <p><strong>Teléfono:</strong> +524423786986</p>
          <p><strong>Email:</strong> salemwitchcafe@gmail.com</p>

          <h4>Horario</h4>
          <ul>
            <li>Lunes a Viernes: 09:00 - 19:00</li>
            <li>Sábado y Domingo: 09:00 - 21:00</li>
          </ul>
        </aside>

        <div className="contact-map" aria-label="mapa de ubicación">
          <h3>Ubicación</h3>
          <div className="map-wrapper">
            {}
            <iframe
              title="mapa-cafeteria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5436.8697735982805!2d-100.41251031681576!3d20.58791247515705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b5e5b229f99%3A0x2974cc805d8dff1b!2sRestaurante%20Caf%C3%A9%20Salem%20Witch%20House%20Centro%20Quer%C3%A9taro!5e0!3m2!1ses!2smx!4v1764383591805!5m2!1ses!2smx"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="contact-form" aria-label="formulario de contacto">
        <h3>Envía un mensaje</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} />

          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
