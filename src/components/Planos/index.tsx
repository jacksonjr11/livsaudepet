import React from "react";
import wifiImg from "../../assets/vectors/wifi.svg";
import { banho } from "../../mock/banho";
import { tosa } from "../../mock/tosa";
import "./styles.scss";

const Planos: React.FC = () => {
  return (
    <div id="Planos">
      <h1 className="plans_title">Nossos Serviços</h1>
      <h3>Todos os veterinarios que prestam serviços<br />possuem formação na área.</h3>
      <div className="plans_container">
        {banho.map((plan, index) => (
          <div className="plan_item" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}

        {tosa.map((plan, index) => (
          <div className="plan_item2" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}

        {tosa.map((plan, index) => (
          <div className="plan_item3" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}
        {tosa.map((plan, index) => (
          <div className="plan_item4" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}
        {tosa.map((plan, index) => (
          <div className="plan_item5" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}
        {tosa.map((plan, index) => (
          <div className="plan_item6" key={index}>
            {/* <img src={wifiImg} alt="wifi" /> */}
            {/* <strong>{plan.title}</strong> */}
            {/* <span className="price">{plan.price}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planos;
