import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./homepage";
import Insight from "./components/pages/insight";
import Header from "./components/header/mainheader";
import BootCamp from "./components/pages/bootcamp";
import DigiForm from "./components/pages/digiform";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/insight" component={Insight} />
          <Route path="/bootcamp" component={BootCamp} />
          <Route path="/bootcamp_form" component={DigiForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
