import React from "react";

// props = informações passadas para esse componente
const Show = (props) => {
  return (
    <div>
      <h1>Show</h1>
      {/* Acessa dentro do objeto props, a chave name, para mostrar como informação */}
      <h3>O nome do usuário é: {props.name}</h3>
    </div>
  );
};

export default Show;
