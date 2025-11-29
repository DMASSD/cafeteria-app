import React, { useState } from "react";
import "./AdminMenu.css";

const AdminMenu = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Café Americano",
      precio: "30",
      imagen: "https://plus.unsplash.com/premium_photo-1723559972702-2659e41dbb5b?q=80&w=736&auto=format",
    },
    {
      id: 2,
      nombre: "Capuchino",
      precio: "40",
      imagen: "https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690?w=600&auto=format",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    precio: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Agregar producto
  const agregarProducto = () => {
    if (!formData.nombre || !formData.precio || !formData.imagen) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevo = {
      id: Date.now(),
      nombre: formData.nombre,
      precio: formData.precio,
      imagen: formData.imagen,
    };

    setProductos([...productos, nuevo]);
    resetForm();
  };

  // Preparar edición
  const editarProducto = (prod) => {
    setFormData(prod);
  };

  // Guardar edición
  const guardarEdicion = () => {
    setProductos(
      productos.map((p) => (p.id === formData.id ? formData : p))
    );
    resetForm();
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  // Limpiar formulario
  const resetForm = () => {
    setFormData({ id: null, nombre: "", precio: "", imagen: "" });
  };

  return (
    <div className="admin-container">
      <h2>Panel del Administrador - Editar Menú</h2>

      <div className="admin-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={formData.nombre}
          onChange={handleChange}
        />

        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagen"
          placeholder="URL de imagen"
          value={formData.imagen}
          onChange={handleChange}
        />

        {formData.id ? (
          <button onClick={guardarEdicion} className="btn-editar">
            Guardar Cambios
          </button>
        ) : (
          <button onClick={agregarProducto} className="btn-agregar">
            Agregar Producto
          </button>
        )}

        {formData.id && (
          <button onClick={resetForm} className="btn-cancelar">
            Cancelar
          </button>
        )}
      </div>

      <div className="admin-lista">
        {productos.map((prod) => (
          <div key={prod.id} className="admin-item">
            <img src={prod.imagen} alt={prod.nombre} />
            <h4>{prod.nombre}</h4>
            <p>${prod.precio}</p>

            <div className="admin-buttons">
              <button
                className="btn-editar"
                onClick={() => editarProducto(prod)}
              >
                Editar
              </button>

              <button
                className="btn-eliminar"
                onClick={() => eliminarProducto(prod.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
