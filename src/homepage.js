import React, { Component } from "react";

import "./App.css";

import OtherHeader from "./components/header/otherheader";
import MainPage from "./components/pages/mainpage";
import Section from "./components/pages/section";
import MainFooter from "./components/footer/mainfooter";
import ServicesHead from "./components/pages/serviceshead";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <OtherHeader />

        <Section />
        <MainPage />
        <ServicesHead />
        <MainFooter />
      </div>
    );
  }
}

export default HomePage;
