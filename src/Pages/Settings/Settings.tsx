import { Component } from "react";
import "./Settings.css";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle";
import { SectionTitle } from "../../components/Titles/SectionTitle/SectionTitle";

import { RadioComponent, RadioSet } from "../../components/Forms/Radio/Radio";

type SettingsProperities = {
  getAppTheme : () => string;
  setAppTheme : (theme : string) => void;
};

type SettingsStates = {};

export class SettingsPage extends Component<
  SettingsProperities,
  SettingsStates
> {


  constructor(props : SettingsProperities) {
    super(props);
  //  this.props.setAppTheme.bind(this);
  }
  _changeTheme(theme: string) {
    this.props.setAppTheme(theme);
  }

  _getThemeSelectSet(): RadioSet[] {
    const radioSet: RadioSet[] = [];

    const themeRadioName = "theme-select";
    radioSet.push({
      checked : this.props.getAppTheme() == "default",
      name: themeRadioName,
      title: "Default",
      onClick: () => {
        this._changeTheme("default");
      },
      bind: this,
    });
    radioSet.push({
      checked : this.props.getAppTheme() == "light",
      name: themeRadioName,
      title: "Light",
      onClick: () => {
        this._changeTheme("light");
      },
      bind: this,
    });
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
