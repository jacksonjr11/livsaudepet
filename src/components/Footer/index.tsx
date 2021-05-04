import React from "react";
import { contatos } from "../../mock/contatos";
import { horarios } from "../../mock/horarios";
import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer id="Page_footer">
      <ul className="list">
        <h2>Contatos</h2>
        {contatos.map((contato, index) => (
          <li key={index}>
            <a href={contato.link} target="blank">
              {contato.contact}
            </a>
          </li>
        ))}
      </ul>
      {/* <ul>
        <h2>Cobertura</h2>
        {cobertura.map((local, index) => (
          <li key={index}>{local.local}</li>
        ))}
      </ul> */}
      <ul>
        <h2>Funcionamento</h2>
        {horarios.map((horario, index) => (
          <li key={index}>{horario.horario}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
