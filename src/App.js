import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import LatestWork from "./Pages/LatestWork";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/latestworks">
          <LatestWork />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
