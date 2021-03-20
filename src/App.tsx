import React from "react";
import { WindowProvider } from "./contexts/window.context";
import Routes from "./routes/index.routes";

const App: React.FC = () => (
  <WindowProvider>
    <Routes />
  </WindowProvider>
);

export default App;
