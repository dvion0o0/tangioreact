import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route exact path="/about">
            About
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
