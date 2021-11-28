import { Component } from "react";
import { ReactComponent as MenuIcon }  from "../../icons/hamburger-icon.svg";
import "./Nav.css";

type NavProperities = {
  setAppPage: (page: string) => void;
};

type NavStates = {
  activePage: string;
  expanded: boolean;
};

export class Nav extends Component<NavProperities, NavStates> {
  constructor(props: NavProperities) {
    super(props);
    this.props.setAppPage.bind(this);
    this.state = {
      activePage: "home-page",
      expanded: false,
    };
  }

  setActive(name: string) {
    this.setState({ activePage: name });
    this.props.setAppPage(name);
  }

  _toggleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  _checkExpandedNavButton() {
    let returnClass = "react-example-nav-expand-button";
    if (this.state.expanded) {
      returnClass += " expanded";
    }
    return returnClass;
  }

  _checkExpandedNav() {
    let returnClass = "react-example-nav";
    if (this.state.expanded) {
      returnClass += " expanded";
    }
    return returnClass;
  }
  _checkActiveButton(name: string) {
    let returnClass = "nav-button";
    if (this.state.activePage == name) {
      returnClass += " active";
    }

    return returnClass;
  }

  render() {
    return (
      <div className="react-example-nav-container">
        <button
          className={this._checkExpandedNavButton()}
          onClick={() => this._toggleExpand()}
        >
          <div className="react-example-nav-expand-button-container">
              <MenuIcon className="react-example-nav-expand-button-icon" fill="cyan" stroke="cyan"/>
 
          </div>
        </button>
        <nav className={this._checkExpandedNav()}>
          <button
            className={this._checkActiveButton("home-page")}
            onClick={() => this.setActive("home-page")}
          >
            Home
          </button>
          <button
            className={this._checkActiveButton("accordion-page")}
            onClick={() => this.setActive("accordion-page")}
          >
            Accordions
          </button>
          <button
            className={this._checkActiveButton("about-page")}
            onClick={() => this.setActive("about-page")}
          >
            About
          </button>
        </nav>
      </div>
    );
  }
}

export default Nav;
