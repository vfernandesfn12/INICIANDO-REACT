import React from "react";
import ImgChuva from "../assets/chuva-de-prata.jpg"

const MostrarImagens = () => {
  return (
    <div>
      {/* Imagens via link externo */}
      <h3>Goku SSJ</h3>
      <img
        src="https://preview.redd.it/do-you-like-ssj3-gokus-design-v0-ce8e004p2agd1.jpeg?auto=webp&s=85b5eac7a28f06d96f8aea56546dc1bdb434fc9f"
        alt=""
        width={900}
        height={500}
      />

      {/* Imagens via assets */}
      <h3>Flores</h3>
      <img src={ImgChuva} alt="" width={900} height={500} />

      {/* Imagens via pasta pública */}
      <h3>Neymar</h3>
      <img src="../images.jpg" alt="" width={900} height={500} />
    </div>
  );
};

export default MostrarImagens;
