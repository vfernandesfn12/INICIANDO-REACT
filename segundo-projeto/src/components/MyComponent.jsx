import React from "react";
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
      <h1>Meu incrivel componente</h1>
      <p>Paragrafo muito top do componente</p>
      <p className="azul">Este aqui não vai vazar</p>
      <h2
        style={{color: "blue", backgroundColor: "pink", fontSize: "200px" }}>Texto top</h2>
    </div>
  );
};

export default MyComponent;
