import { useState } from 'react'

export const Varia = () => {
    //Variável padrão
    let itgo = "Shazam";
    let numero = 11

    //Variável com hoook useState
    const [number, setNumber] = useState(9);

  return (
    <div>
        {/* Uso de Variáveis Padrão */}
        <p>A palavra sorteada foi: {itgo}</p>
        <h1>{numero}</h1>

        <button onClick={() => {numero++}}>Aumentar Contagem</button>

        {/* Uso de Variáveis a partir de Agora */}
        <h1>{number}</h1>
        <button onClick={() => {setNumber(number + 2)}}> + </button>
        <button onClick={() => {setNumber(9)}}> Resetar </button>
        <button onClick={() => {setNumber(number - 2)}}> / </button>

       
    </div>
  )
}