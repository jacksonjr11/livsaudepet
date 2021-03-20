import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Dicas from "../pages/Dicas";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/tips" component={Dicas} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Router>
  );
};

export default Routes;
