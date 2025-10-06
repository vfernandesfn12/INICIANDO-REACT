//Rafce

import { useState } from "react";

const Listagem = () => {
  const [lista, setLista] = useState(["Pedro", "Cris", "Manoel", "Altair", "Moacyr"]);

  const [jogadores] = useState([
    {id:1, nome:"Kaká", time: "São Paulo", number:8 }, 
    {id:2, nome:"Bruno Henrique", time: "Fluminense", number:8 }, 
    {id:3, nome:"Everaldo", time: "Botafogo", number:8 }
   
]);

const [numero, setNumero] = useState(1)


  return (
    <div>
        <button onClick={() => {
            setNumero(numero +1)
            console.log([...lista])
            setLista([...lista, numero])

        }}>
        Adicionar na lista
      </button>

      <h2>Listagem</h2>
      <ul>
        <li>João Lucas</li>
        <li>Marcelo</li>
        {lista.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>


{/* Lista de h3s com a seguine mensagem
O jogador "BARABARA" jogou no time "BREBERE" com a camisa "TCHU" */}


      {/* USANDO O MAP PRA PERCORRER O ARRAY, E CRIAR NOVO   8IUJKLUIOIOPS ELEMENTOS
      HTML COM BASE NA LISTA */}
      <h2>Lista de jogadores</h2>
      {jogadores.map((jogador) => (
        <h3 key={jogador.id}>
            O jogador {jogador.nome} jogou no time {jogador.time} com a camisa {jogador.number}!
        </h3>
      ))}


    </div>
  );
};

export default Listagem;