import React, { Component } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Accordions from "./Pages/Accordions/Accordions";
import Nav from "./components/Nav/Nav";

interface AppProperties {}

interface AppStates {
  homePage: boolean;
  accordionPage: boolean;
  aboutPage: boolean;
}

class App extends Component<AppProperties, AppStates> {
  constructor(props: AppProperties) {
    super(props);
    this.state = {
      homePage: true,
      accordionPage: false,
      aboutPage: false,
    };
    this.setAppPage = this.setAppPage.bind(this);
  }

  setAppPage(name: string) {
    this.setState({ homePage: false });
    this.setState({ aboutPage: false });
    this.setState({ accordionPage: false });
    switch (name) {
      case "home-page":
        this.setState({ homePage: true });
        break;
      case "accordion-page":
        this.setState({ accordionPage: true });
        break;
      case "about-page":
        this.setState({ aboutPage: true });
        break;
      default:
        break;
    }
  }

  render() {
    const { homePage, accordionPage, aboutPage } = this.state;

    return (
      <div className="app-main default">
        <div className="meta-grid">
          <div className="meta-grid-nav">
            <Nav setAppPage={this.setAppPage} />
          </div>

          <div className="meta-grid-content">
            {homePage && <Home />}
            {accordionPage && <Accordions />}
            {aboutPage && <About />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
