import { Component } from "react";
import "./Radio.css";

export type RadioSet = {
    title: string;
    name: string;
    onClick: Function;
    bind: any;
    checked : boolean;
}

type RadioProperities = {
  containerClass: string;
  radioSet: RadioSet[];
};

type RadioStates = {};

export class RadioComponent extends Component<RadioProperities, RadioStates> {
  constructor(props: RadioProperities) {
    super(props);
  }

  render() {
    const returnHTML: JSX.Element[] = [];

    for (const radio of this.props.radioSet) {
      const title = radio.title;
      const name = radio.name;
      const checked = radio.checked;
      returnHTML.push(
        <div className={this.props.containerClass}>
          <input
          checked={checked}
            id={title}
            name={name}
            type="radio"
            onClick={(event : any) => {
              radio.onClick.call(radio.bind,event);
            }}
          />
          <label htmlFor={title}>{title}</label>
        </div>
      );
    }

    return returnHTML;
  }
}

export default RadioComponent;
