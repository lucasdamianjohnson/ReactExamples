import React, { Component } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ComponentsPage from "./Pages/Components/Components";
import SettingsPage from "./Pages/Settings/Settings";
import BabylonPage from "./Pages/Babylon/Babylon.page";
import Nav from "./components/Nav/Nav";

interface AppProperties {}

interface AppStates {
  currentTheme: string;
  homePage: boolean;
  babylonPage: boolean;
  componentsPage: boolean;
  aboutPage: boolean;
  settingsPage: boolean;
}

class App extends Component<AppProperties, AppStates> {
  constructor(props: AppProperties) {
    super(props);
    this.state = {
      currentTheme: "default",
      homePage: true,
      babylonPage: false,
      componentsPage: false,
      aboutPage: false,
      settingsPage: false,
    };
    this.setAppPage = this.setAppPage.bind(this);
    this.setAppTheme = this.setAppTheme.bind(this);
    this.getAppTheme = this.getAppTheme.bind(this);
  }

  setAppPage(name: string) {
    this.setState({ homePage: false });
    this.setState({ babylonPage: false });
    this.setState({ aboutPage: false });
    this.setState({ componentsPage: false });
    this.setState({ settingsPage: false });
    switch (name) {
      case "home-page":
        this.setState({ homePage: true });
        break;
      case "babylon-page":
        this.setState({ babylonPage: true });
        break;
      case "components-page":
        this.setState({ componentsPage: true });
        break;
      case "settings-page":
        this.setState({ settingsPage: true });
        break;
      case "about-page":
        this.setState({ aboutPage: true });
        break;
      default:
        break;
    }
  }

  getAppTheme() {
    return this.state.currentTheme;
  }
  setAppTheme(theme: string) {
    this.setState({ currentTheme: theme });
  }

  _getAppClassName() {
    let defaultClass = "app-main";

    switch (this.state.currentTheme) {
      case "default":
        defaultClass += " default";
        break;
      case "divine":
        defaultClass += " divine";
        break;
      case "light":
        defaultClass += " light";
        break;
    }

    return defaultClass;
  }

  render() {
    const { homePage, babylonPage, componentsPage, aboutPage, settingsPage } =
      this.state;

    return (
      <div className={this._getAppClassName()}>
        <div className="meta-grid">
          <div className="meta-grid-nav">
            <Nav setAppPage={this.setAppPage} />
          </div>

          <div className="meta-grid-content">
            {homePage && <Home />}
            {babylonPage && <BabylonPage />}
            {componentsPage && <ComponentsPage />}
            {settingsPage && (
              <SettingsPage
                getAppTheme={this.getAppTheme}
                setAppTheme={this.setAppTheme}
              />
            )}
            {aboutPage && <About />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
