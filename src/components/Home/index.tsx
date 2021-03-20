import React from "react";
import networkImg from "../../assets/vectors/network.svg";
import "./styles.scss";

const HomeSection: React.FC = () => {
  const handleMoveToContacts = React.useCallback(() => {
    const footer = document.getElementById("Page_footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="Home">
      <div className="aboutleft">
        <section>
          <h1 className="title">Linkwan Telecom</h1>
          <h3 className="slogan">Conectando você com o mundo.</h3>
        </section>
        <div className="actions">
          <button onClick={handleMoveToContacts} className="button">
            Fale conosco
          </button>
        </div>
      </div>
      <div className="aboutright">
        <img src={networkImg} alt="Network" className="network" />
      </div>
    </section>
  );
};

export default HomeSection;
