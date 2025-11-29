import React from "react";
import Menu from "./Menu";
import ReservationForm from "./ReservationForm";
import Contact from "./Contact";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurante Café Salem Witch House Centro Querétaro</h1>
      <Menu />
      <hr />
      <ReservationForm />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
