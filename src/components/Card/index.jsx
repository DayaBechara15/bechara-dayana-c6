import React from "react";

function Card({auto}) {
  const {modelo, marca, color} = auto;
  return (
    <div className="card">
      <h1>Auto registrado:</h1>
      <p>Modelo: {modelo}</p>
      <p>Marca: {marca}</p>
      <p>Color: {color}</p>
    </div>
  );
}

export default Card;
