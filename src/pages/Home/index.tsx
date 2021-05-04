import React from "react";
import Header from "../../components/Header";
import Planos from "../../components/Planos";
import HomeComponent from "../../components/Home";
import "./styles.scss";
import Footer from "../../components/Footer";
import Sobre from "../../components/Sobre";
import { BsWindow } from "react-icons/bs";
import { FaSyringe ,FaPrescriptionBottleAlt} from "react-icons/fa";
import { GiShower,GiShoppingBag } from "react-icons/gi";
import { RiScissors2Fill } from "react-icons/ri";

const Home: React.FC = () => {
  return (
    <div id="app">
      <div id="HomePage" className="page">
        <Header />
        <main>
          <HomeComponent />
          <Planos />
          <Sobre />
        </main>
      </div>
      <Footer />
      <div className="container-icon">
          <ul>
            <li>
              <div className="icon_container">
                <BsWindow className="icone"/>
                <FaSyringe className="icone"/>
                <GiShower className="icone"/>
                <RiScissors2Fill className="icone"/>
                <FaPrescriptionBottleAlt className="icone"/>
                <GiShoppingBag className="icone"/>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Home;
