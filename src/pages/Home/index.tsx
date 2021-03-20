import React from "react";
import Header from "../../components/Header";
import Planos from "../../components/Planos";
import HomeComponent from "../../components/Home";
import WhatsappFAB from "../../components/WhatsappFAB";
import "./styles.scss";
import Footer from "../../components/Footer";
import Sobre from "../../components/Sobre";

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
        <WhatsappFAB />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
