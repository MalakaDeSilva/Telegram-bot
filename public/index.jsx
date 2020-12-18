"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./app";

function Home() {
  return (
    <div align="center">
      <p className="h1">CoViD-19 Dashboard</p>
      <Router>
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
