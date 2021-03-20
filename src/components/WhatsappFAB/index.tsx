import React from "react";
import whatsappImg from "../../assets/vectors/whatsapp.svg";
import { config } from "../../config";
import "./styles.scss";

const WhatsappFAB: React.FC = () => {
  const handleOpenWhatsapp = () => {
    const WHATSAPP_URL = config.WHATSAPP_URL;
    window.open(WHATSAPP_URL);
  }

  return (
    <button id="Whatsapp_fab" onClick={handleOpenWhatsapp}>
      <img src={whatsappImg} alt="whatsApp" />
    </button>
  );
};

export default WhatsappFAB;
