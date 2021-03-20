import React from "react";
import wifiImg from "../../assets/vectors/wifi.svg";
import { plans } from "../../mock/plans";
import "./styles.scss";

const Planos: React.FC = () => {
  return (
    <div id="Planos">
      <h1 className="plans_title">Nossos planos</h1>
      <h3>Confira nossos preços e planos de uma<br />internet de alta qualidade</h3>
      <div className="plans_container">
        {plans.map((plan, index) => (
          <div className="plan_item" key={index}>
            <img src={wifiImg} alt="wifi" />
            <strong>{plan.title}</strong>
            <span className="price">{plan.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planos;
