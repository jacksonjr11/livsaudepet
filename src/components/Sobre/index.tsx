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
        <h1>Prestamos serviço de qualidade</h1>
        <span>
          Nossos serviços contam com o que há de melhor na tecnologia para
          prover-lhe uma rede de qualidade, com um preço justo
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
