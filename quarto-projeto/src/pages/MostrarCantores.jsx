import React, { useState } from "react";
import CardCantor from "../components/CardCantor";

const MostrarCantores = () => {
  const cantores = useState([
    {
      id: 1,
      nome: "DJ Alok",
      genero: "Eletr",
      premioMelhor: false,
      posicao: 45,
    },
    {
      id: 2,
      nome: "DJ David Guetta",
      genero: "Eletr",
      premioMelhor: false,
      posicao: 77,
    },
    {
      id: 3,
      nome: "DJ Avicii",
      genero: "Eletr",
      premioMelhor: true,
      posicao: 22,
    },
  ]);

  return (
    <div>
      <h1>MostrarCantores</h1>
      {cantores.map((cantor) => (
        <CardCantor
          key={cantor.id}
          name={cantor.nome}
          gender={cantor.genero}
          thebest={cantor.premioMelhor}
          position={cantor.posicao}
        />
      ))}
    </div>
  );
};

export default MostrarCantores;
