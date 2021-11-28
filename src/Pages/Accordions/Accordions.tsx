import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle";

import { Accordion } from "../../components/Accordion/Accordion";
import { LoremIpsum } from "react-lorem-ipsum";
type AccordionsProperities = {};
type AccordionsStates = {};

export class Accordions extends Component<
  AccordionsProperities,
  AccordionsStates
> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Accordions" />
        <Accordion
          titleContent={<span>accordion 1</span>}
          mainContent={<LoremIpsum p={2} />}
        />
        <Accordion
          titleContent={<span>accordion 2</span>}
          mainContent={
            <div>
              <LoremIpsum p={2} />
            </div>
          }
        />
        <Accordion
          titleContent={<span>accordion 3</span>}
          mainContent={<LoremIpsum p={2} />}
        />
        <Accordion
          titleContent={<span>accordion 4</span>}
          mainContent={<LoremIpsum p={2} />}
        />
         <Accordion
          titleContent={<span>accordion 5</span>}
          mainContent={<LoremIpsum p={2} />}
        />
         <Accordion
          titleContent={<span>accordion 6</span>}
          mainContent={<LoremIpsum p={2} />}
        />
         <Accordion
          titleContent={<span>accordion 7</span>}
          mainContent={<LoremIpsum p={2} />}
        />
         <Accordion
          titleContent={<span>accordion 8</span>}
          mainContent={<LoremIpsum p={2} />}
        />
      </div>
    );
  }
}

export default Accordions;
