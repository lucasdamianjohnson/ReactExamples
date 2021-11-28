import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle";
import { SectionTitle } from "../../components/Titles/SectionTitle/SectionTitle";

import { Accordion } from "../../components/Accordion/Accordion";
import { LoremIpsum } from "react-lorem-ipsum";
type ComponentsPageProperities = {};
type ComponentsPageStates = {};

export class ComponentsPage extends Component<
  ComponentsPageProperities,
  ComponentsPageStates
> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Components" />
        <SectionTitle title="Accordions" />
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

export default ComponentsPage;
