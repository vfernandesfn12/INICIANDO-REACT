import React from "react";
import styles from "./Formulario.module.css";

//Importação do hook form
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    //register = cria um objeto para ser enviado depois
    register,
    //handleSubmit = lida com o envio do formulario
    handleSubmit,
    // errors = objeto com erros de validação no formulário
    formState: { errors },
    //watch = observa o valor de um input
    watch,
  } = useForm();

  //Caso o formulario esteja pronto para envio
  const onSubmit = (data) => {
    console.log("Dados preenchidos:", data);
  };

  //Caso o formulário tenha errors
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <div>
      <h1>Formulario</h1>

      {/* CAIXINHA DE NOME */}
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            {...register("nome", {
                required : "O campo nome é obrigatório",
                minLength : {
                    value : 2,
                    message : "O minimo de caracteres é 2",
                },
                maxLength: {
                    value: 8,
                    message: "O máximo de caracteres é 8",
                },
                pattern : {
                    value : /^[A-Za-z\s]+$/i,
                    message : "O nome só pode conter letras"
                }
            })}
          />
        </label>
        {/* <p className={styles.error}>Nome é obrigatório </p> */}
        {errors.nome && <p className={styles.error}>{errors.nome.message} </p>}
        {/* CAIXINHA DE EMAIL: */}

        {/* botao pra envio */}
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            borderColor: "black",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
