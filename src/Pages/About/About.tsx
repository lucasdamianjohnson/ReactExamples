import { Component } from "react";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
import InfoBox from "../../components/Cards/InfoBox/InfoBox.component";
import {
  ButtonGroup,
  ButtonGroupButtons,
} from "../../components/Buttons/ButtonGroup/ButtonGroup.component";
import { ReactComponent as DivineStarLogo } from "../../icons/divinestar.svg";


type AboutProperities = {};

type AboutStates = {};

export class About extends Component<AboutProperities, AboutStates> {
  render() {
    const buttons: ButtonGroupButtons = [
      {
        id: "1",
        content: "Visit Repo",
        onClick: () => {
          window.open("https://github.com/lucasdamianjohnson/ReactExamples");
        },
      },
      {
        id: "2",
        content: "Visit Portfolio",
        onClick: () => {
          window.open("https://lukejohnson.media/");
        },
      },
    ];
    return (
      <div className="app-content">
        <PageTitle title="About" />
        <div className="divine-star-logo-container">
          <DivineStarLogo className="divine-star-logo" />
        </div>
        <InfoBox
          content={
            <div>
              <p className="info-box-text">
                This is a website built using React and plain CSS. All
                components were made by Luke expect the ones provided by
                "react-lorem-ipsum" which were used just to provide filler text
                for the examples.
              </p>
              <ButtonGroup buttons={buttons}/>
            </div>
          }
        />
      </div>
    );
  }
}

export default About;
