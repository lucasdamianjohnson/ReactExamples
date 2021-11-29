import { Component } from "react";
import "./ButtonGroup.css";

export type ButtonGroupButtons = {
  id: string;
  content: any;
  onClick?: Function;
  bind?: any;
}[];

type ButtonGroupProperities = {
  containerClass?: string;
  buttons: ButtonGroupButtons;
};

type ButtonGroupStates = {};

export class ButtonGroup extends Component<
  ButtonGroupProperities,
  ButtonGroupStates
> {
  _onClick: Function = () => {};
  containerClass: string = "default-button-group-container";
  buttonClass: string = "default-button-group-button";

  clickFunctions: Record<string, Function> = {};

  constructor(props: ButtonGroupProperities) {
    super(props);
    if (this.props.containerClass) {
      this.containerClass = this.props.containerClass;
    }

    for (const button of this.props.buttons) {
      if (button.onClick && !button.bind) {
        this.clickFunctions[button.id] = button.onClick;
      }
      if (button.onClick && button.bind) {
        this.clickFunctions[button.id] = button.onClick.bind(button.bind);
      }
    }
  }

  render() {
    const returnHTML: JSX.Element[] = [];

    for (const buttons of this.props.buttons) {
      let onClick = () => {};
      if (this.clickFunctions[buttons.id]) {
        onClick = () => {
          this.clickFunctions[buttons.id]();
        };
      }

      returnHTML.push(
        <button onClick={onClick} className={this.buttonClass}>
          {buttons.content}
        </button>
      );
    }

    return <div className={this.containerClass}>{returnHTML}</div>;
  }
}

export default ButtonGroup;
