import React, { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    hora: "",
    personas: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Reservación exitosa para ${formData.nombre}!`);
    setFormData({ nombre: "", email: "", fecha: "", hora: "", personas: 1 });
  };

  return (
    <div>
      <h2>Reservaciones</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Fecha:</label>
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />

        <label>Hora:</label>
        <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />

        <label>Personas:</label>
        <input type="number" name="personas" value={formData.personas} onChange={handleChange} min="1" required />

        <button type="submit" style={{ marginTop: "10px" }}>Reservar</button>
      </form>
    </div>
  );
};

export default ReservationForm;