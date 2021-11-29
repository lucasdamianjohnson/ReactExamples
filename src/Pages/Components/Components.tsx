import { Component } from "react";
import "./Component.css";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
import { SectionTitle } from "../../components/Titles/SectionTitle/SectionTitle.component";
import { SubSectionTitle } from "../../components/Titles/SubSectionTitle/SubSectionTitle.component";

import { Accordion } from "../../components/Accordion/Accordion.component";
import { InfoBox } from "../../components/Cards/InfoBox/InfoBox.component";
import { BasicButton } from "../../components/Buttons/BasicButton/BasicButton.component";
import { ButtonGroup,ButtonGroupButtons } from "../../components/Buttons/ButtonGroup/ButtonGroup.component"; 

import { LoremIpsum } from "react-lorem-ipsum";
type ComponentsPageProperities = {};
type ComponentsPageStates = {};

export class ComponentsPage extends Component<
  ComponentsPageProperities,
  ComponentsPageStates
> {
  _getAccordionSection() {
    return (
      <div className="component-section">
        <SectionTitle title="Accordions" />
        <Accordion
          titleContent={<span>accordion 1</span>}
          mainContent={<LoremIpsum p={2} />}
        />
        <Accordion
          titleContent={<span>accordion 2</span>}
          mainContent={<LoremIpsum p={2} />}
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

  _getButtonSection() {

    const buttonGroup1  : ButtonGroupButtons=  [
      {
        id : "1",
        content : "Button 1",
      },
      {
        id : "2",
        content : "Button 2",
      },
      {
        id : "3",
        content : "Button 3",
      },
    ];
    
    const buttonGroup2  : ButtonGroupButtons=  [
      {
        id : "1",
        content : "Button 1",
      },
      {
        id : "2",
        content : "Button 2",
      },
      {
        id : "3",
        content : "Button 3",
      },
      {
        id : "4",
        content : "Button 4",
      },
      {
        id : "5",
        content : "Button 5",
      },
    ]


    return (
      <div className="component-section">
        <SectionTitle title="Buttons" />
        <SubSectionTitle title="Basic Buttons" />
        <div className="component-sub-section">
          <BasicButton content="Basic Button" />
        </div>
        <SubSectionTitle title="Button Groups" />
        <ButtonGroup buttons={buttonGroup1}/>
        <ButtonGroup buttons={buttonGroup2}/>
      </div>
    );
  }

  _getCardSection() {
    return (
      <div className="component-section">
        <SectionTitle title="Cards" />
        <InfoBox
          content={
            <div>
              <p className="info-box-text">{<LoremIpsum p={1} />}</p>
            </div>
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="app-content">
        <PageTitle title="Components" />
        {this._getAccordionSection()}
        {this._getButtonSection()}
        {this._getCardSection()}
      </div>
    );
  }
}

export default ComponentsPage;
