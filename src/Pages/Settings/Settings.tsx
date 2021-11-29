import { Component } from "react";
import "./Settings.css";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
import { SectionTitle } from "../../components/Titles/SectionTitle/SectionTitle.component";

import {
  RadioComponent,
  RadioSet,
} from "../../components/Forms/Radio/RadioGroup.component";

type SettingsProperities = {
  getAppTheme: () => string;
  setAppTheme: (theme: string) => void;
};

type SettingsStates = {};

export class SettingsPage extends Component<
  SettingsProperities,
  SettingsStates
> {
  constructor(props: SettingsProperities) {
    super(props);
    //  this.props.setAppTheme.bind(this);
  }
  _changeTheme(theme: string) {
    this.props.setAppTheme(theme);
  }

  _getThemeSelectSet(): RadioSet[] {
    const themeRadioName = "theme-select";

    const radioSet: RadioSet[] = [
      {
        checked: this.props.getAppTheme() == "default",
        name: themeRadioName,
        title: "Dark Cyan",
        onClick: () => {
          this._changeTheme("default");
        },
        bind: this,
      },
      {
        checked: this.props.getAppTheme() == "divine",
        name: themeRadioName,
        title: "Divine Star",
        onClick: () => {
          this._changeTheme("divine");
        },
        bind: this,
      },
      {
        checked: this.props.getAppTheme() == "light",
        name: themeRadioName,
        title: "Light",
        onClick: () => {
          this._changeTheme("light");
        },
        bind: this,
      },
    ];
    return radioSet;
  }

  render() {
    return (
      <div className="app-content">
        <PageTitle title="Settings" />
        <SectionTitle title="Theme" />
        <RadioComponent
          containerClass="theme-select-radio-container"
          radioSet={this._getThemeSelectSet()}
        />
      </div>
    );
  }
}

export default SettingsPage;
