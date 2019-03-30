import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/mainheader";
import OtherHeader from "./components/header/otherheader";
import MainPage from "./components/pages/mainpage";
import Section from "./components/pages/section";
import MainFooter from "./components/footer/mainfooter";
import ServicesHead from "./components/pages/serviceshead";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
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
