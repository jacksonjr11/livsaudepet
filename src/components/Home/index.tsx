import React from "react";
import networkImg from "../../assets/vectors/network.png";
import "./styles.scss";
import dogcat from "../../assets/vectors/dogcat.jpg"

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
          <img src={dogcat} alt="dogcat" className="dogcat"/>
          <h1 className="title">Liv Saúde Pet</h1>
          <h3 className="slogan">Seu Pet com mais saúde.</h3>
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
