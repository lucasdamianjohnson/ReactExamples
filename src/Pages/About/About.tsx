import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
type AboutProperities = {};

type AboutStates = {};

export class About extends Component<AboutProperities, AboutStates> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="About" />
      </div>
    );
  }
}

export default About;
