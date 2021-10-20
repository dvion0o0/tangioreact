import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import LatestWork from "./Pages/LatestWork";
import WhatWeDo from "./Pages/WhatWeDo";
import Demo from "./Pages/templates/demo";
function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/latestworks">
          <LatestWork />
        </Route>
        <Route exact path="/whatwedo">
          <WhatWeDo />
        </Route>
        <Route exact path="/latestworks/:projectid">
          <Demo />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
