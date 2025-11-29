import React from "react";

const Promociones = () => {
  const promo = {
    titulo: "🎄 Especial Navideño: Latte de Jengibre",
    descripcion: "Disfruta un delicioso latte con especias navideñas.",
    precioOriginal: 55,
    precioDescuento: 40,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BTHydbXKJuX8awW7aEFD6SLHEnJMXlZSwg&s"
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Promociones Navideñas</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "start"
        }}
      >
        <div
          style={{
            border: "2px solid #d40000",
            padding: "15px",
            width: "250px",
            borderRadius: "10px",
            backgroundColor: "#fff7f7"
          }}
        >
          <img
            src={promo.imagen}
            alt={promo.titulo}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>{promo.titulo}</h3>
          <p>{promo.descripcion}</p>
          <p style={{ textDecoration: "line-through", color: "gray" }}>
            ${promo.precioOriginal}
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
            ${promo.precioDescuento}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
