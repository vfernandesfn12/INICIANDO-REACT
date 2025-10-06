import React from 'react'

const TemplateExpressions = () => {

    let nome = "Vinissao"

    let jogador = {
        nome:"Aspas",
        time:"Mibr",
        jogo:"valorant",
        nivel:"muito bom"
    }

  return (
    <div>
        <h2>Olá, meu nome é {nome}</h2>
        <h2>As informações dos jogadors é {jogador.nome}</h2>

    </div>
  )
}

export default TemplateExpressions