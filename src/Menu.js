import React from "react";

const Menu = () => {
  // Datos de ejemplo
  const items = [
    { id: 1, nombre: "Café Americano", precio: "$30",     imagen: "https://plus.unsplash.com/premium_photo-1723559972702-2659e41dbb5b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { id: 2, nombre: "Capuchino", precio: "$40", imagen: "https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwdWNjaW5vfGVufDB8fDB8fHww" },
    { id: 3, nombre: "Panini", precio: "$60", imagen: "https://plus.unsplash.com/premium_photo-1700581633173-2d672f522636?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, nombre: "Cheesecake", precio: "$50", imagen: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  return (
    <div>
      <h2>Menú de la Cafetería</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {items.map(item => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
            <img src={item.imagen} alt={item.nombre} style={{ width: "100%" }} />
            <h4>{item.nombre}</h4>
            <p>{item.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;