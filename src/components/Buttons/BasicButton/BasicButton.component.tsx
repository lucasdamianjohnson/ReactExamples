import { Component } from "react";
import "./BasicButton.css";

type ButtonProperities = {
  buttonClass?: string;
  content: any;
  onClick?: Function;
  bind?: any;
};

type ButtonStates = {};

export class BasicButton extends Component<ButtonProperities, ButtonStates> {
  _onClick: Function = () => {};
  buttonClass: string = "default-basic-button";

  constructor(props: ButtonProperities) {
    super(props);
    if (this.props.buttonClass) {
      this.buttonClass = this.props.buttonClass;
    }

    if (this.props.onClick && !this.props.bind) {
      this._onClick = this.props.onClick;
    }
    if (this.props.onClick && this.props.bind) {
      this._onClick = this.props.onClick.bind(this);
    }
  }

  render() {
    return <button className={this.buttonClass}>{this.props.content}</button>;
  }
}

export default BasicButton;
