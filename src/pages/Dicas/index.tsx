import React from "react";
import "./styles.scss";
import Header from "../../components/Header";
import { dicas } from "../../mock/dicas";
import ReactPlayer from "react-player";
import { useDimensions } from "../../contexts/window.context";

const Dicas: React.FC = () => {
  const { width } = useDimensions();
  const getVideoWidth = React.useCallback(() => {
    const isSmartphone = width <= 700;
    const isFullHD = width >= 1920;
    const isTooLarge = width >= 2500;

    if (isTooLarge) {
      return 1200;
    }

    if (isFullHD) {
      return 800;
    }

    if (!isSmartphone) {
      return 680;
    }

    return width - 32;
  }, [width]);

  const [videoWidth, setVideoWidth] = React.useState(getVideoWidth());

  React.useEffect(() => {
    setVideoWidth(getVideoWidth());
  }, [getVideoWidth]);

  return (
    <div id="Dicas" className="page">
      <div className="content">
        {dicas.map((dica, index) => (
          <div key={index} className="dica">
            <h2>{dica.title}</h2>
            <ReactPlayer
              url={`videos/${dica.video}`}
              controls
              stopOnUnmount
              width={videoWidth}
              height="auto"
            />
          </div>
        ))}
      </div>
      <Header />
    </div>
  );
};

export default Dicas;
