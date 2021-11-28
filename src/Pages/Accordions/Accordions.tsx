import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle";

import { Accordion } from "../../components/Accordion/Accordion";

type AccordionsProperities = {};
type AccordionsStates = {};

export class Accordions extends Component<AccordionsProperities, AccordionsStates> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Accordions" />
        <Accordion 
        titleContent={<span>test 1</span>}
        mainContent={<p>Some Content</p>}
        /> 
      </div>
    );
  }
}

export default Accordions;
