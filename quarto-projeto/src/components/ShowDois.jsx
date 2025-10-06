import React from "react";

const ShowDois = ({ time, pais, posicao }) => {
  return (
    <div style={{ backgroundColor: "#d3d3d3", color: "black ", width: "500px" }}>
      <h1>Show Dois</h1>
      <h2>O time atual é: {time}</h2>
      <h2>Fica no país: {pais}</h2>
      <h2>E a posição é: {posicao}</h2>
    </div>
  );
};

export default ShowDois;
