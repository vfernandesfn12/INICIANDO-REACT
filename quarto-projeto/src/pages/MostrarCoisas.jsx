import React from "react";
import Show from "../components/Show";
import ShowDois from "../components/ShowDois";

const MostrarCoisas = () => {
  return (
    <div>
      <h1>Mostrar Coisas</h1>
      <Show name={"Billy The Kid"}></Show>
      <Show name={"AL Pacino"}></Show>

      <ShowDois time="City" pais="Italia" posicao="3"></ShowDois>
      <ShowDois time="Real Madrid" pais="Espanha" posicao="2"></ShowDois>
      <ShowDois time="Barcelona" pais="Espanha" posicao="1"></ShowDois>
    </div>
  );
};

export default MostrarCoisas;
