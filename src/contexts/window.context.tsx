/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

interface WindowContextData {
  width: number;
  height: number;
}

const WindowContext = React.createContext({} as WindowContextData);

export const WindowProvider: React.FC = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerWidth);

  const getWidth = () => {
    return window.innerWidth;
  };

  const getHeight = () => {
    return window.innerHeight;
  };

  const updateDimensions = () => {
    if (window.innerWidth !== width) {
      setWidth(getWidth());
    }
    if (window.innerHeight !== height) {
      setHeight(getHeight());
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <WindowContext.Provider
      value={{
        width,
        height,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useDimensions = () => React.useContext(WindowContext);
