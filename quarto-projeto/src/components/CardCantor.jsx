import React from 'react'

const CardCantor = ({ name, gender, thebest, position }) => {
  return (
    <div
    ><h1>CardCantor</h1>
    <h2>O nome é: {name}</h2>
    <h2>O genero é: {gender}</h2>
    <h2>Posição: {position}</h2>
    {thebest && <h3>Já foi o mais melhor do mundo.</h3>}
    </div>
  )
}

export default CardCantor