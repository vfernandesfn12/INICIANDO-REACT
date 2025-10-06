//Importação do hook para pegar os parâmetros da url
import { useParams } from "react-router-dom";

const InfoCard = () => {
//Guarda o parametro id em uma váriavel    
  const { id } = useParams();

  return (
    <div>
    {/* Mostra o texto junto com o valor do parâmetro enviado na url */}
    <h1>INFOCARD DE NÚMERO: {id}</h1>
    </div>
  );
};

export default InfoCard;
