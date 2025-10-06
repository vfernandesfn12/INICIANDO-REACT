import React from 'react'

export const Event = () => {

const teste = (e) => {
console.log("Funcionou sim, parabéns!");
console.log(e);
}

  return (
    <div>

      <button onClick={() => {console.log("cliquei")}}>
        Clique aqui
      </button>
      
      <button onClick={teste}>
        Aqui também
      </button>
      
    </div>
  )
}
