import React from "react";
import aboutImg from "../../assets/vectors/about.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { vantagens } from "../../mock/vantagens";
import "./styles.scss";

const Sobre: React.FC = () => {
  return (
    <div id="Sobre">
      <section className="left">
        <img src={aboutImg} alt="PC" />
      </section>
      <section className="right">
        <h1>Sobre</h1>
        <span>
        Somos uma startup voltada para a prestação de Serviço à Pets em domicílio,
        nosso aplicativo tem o objetivo de conectar profissionais de atendimento e 
        prestadores de serviços aos donos de animais de estimação. Nossos serviços:
        </span>
        <ul>
          {vantagens.map((item, index) => (
            <li key={index}>
              <div className="icon_container">
                <AiOutlineCheck />
              </div>
              {item.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sobre;
