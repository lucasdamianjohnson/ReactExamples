import { Component } from "react";

import "./Home.css";
import logo from "../../icons/logo.svg";
import PageTitle from "../../components/Titles/PageTitle/PageTitle.component";
import SectionTitle from "../../components/Titles/SectionTitle/SectionTitle.component";
import InfoBox from "../../components/Cards/InfoBox/InfoBox.component";
import { ReactComponent as DivineStarLogo } from "../../icons/divinestar.svg";

type HomeProperities = {};

type HomeStates = {};

export class Home extends Component<HomeProperities, HomeStates> {
  constructor(props: HomeProperities) {
    super(props);
  }
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Home" />
        <div className="divine-star-logo-container">
          <DivineStarLogo className="divine-star-logo" />
        </div>
        <InfoBox
          content={
            <div>
              <p className="info-box-title">Welcome</p>
              <div className="react-logo-container">
                <img className="react-logo" src={logo} />
              </div>
              <p className="info-box-text">
                This is a website made by Lucas Johnson. It was built using
                react and hosted using github pages. This was created to serve
                as an example site for Luke's portfolio. The design of this site is meant to be minimalistic. 
                Just a simple 'zen garden' like website.
              </p>
              <br />
              <p className="info-box-text">
                Check out the settings page to switch the theme.
              </p>
            </div>
          }
        />
      </div>
    );
  }
}

export default Home;
