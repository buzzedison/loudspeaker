import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/mainheader";
import OtherHeader from "./components/header/otherheader";
import MainPage from "./components/pages/mainpage";
import Section from "./components/pages/section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <OtherHeader />
          <Section />
          <MainPage />
        </header>
      </div>
    );
  }
}

export default App;
