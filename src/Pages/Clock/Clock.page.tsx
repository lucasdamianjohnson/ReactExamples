import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
import {ClockComponent} from "../../components/Clock/Clock.component";


type ClockPageProperities = {};

type ClockPageStates = {};

export class ClockPage extends Component<ClockPageProperities, ClockPageStates> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Clock" />
        <ClockComponent date={new Date()}/>

      </div>
    );
  }
}

export default ClockPage;
