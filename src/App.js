import React from "react";
import Menu from "./Menu";
import ReservationForm from "./ReservationForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cafetería Online</h1>
      <Menu />
      <hr />
      <ReservationForm />
    </div>
  );
}

export default App;