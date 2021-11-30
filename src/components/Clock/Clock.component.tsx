import { Component } from "react";
import "./ClockComponent.css";

type ClockComponentProperities = {
  class?: string;
  date: Date;
};

type ClockComponentStates = {
  time: string;
};

export class ClockComponent extends Component<
  ClockComponentProperities,
  ClockComponentStates
> {
  time : string = "";
  constructor(props: ClockComponentProperities) {
    super(props);
    this.state = {
      time: this.props.date.toLocaleTimeString(),
    };
  }

  componentDidMount() {
      console.log("mounted");
    setInterval(() => {
        this.setState({time : new Date().toLocaleTimeString()});
    }, 1000);
  }

  getClockClassName() {
    let returnClass = "clock-component-default";
    if (this.props.class) {
      returnClass = this.props.class;
    }

    return returnClass;
  }

  render() {
      const time = this.state.time;
    return <div className={this.getClockClassName()}>
        <div className="clock-component-time">
        {time}
        </div>
        </div>;
  }
}

export default ClockComponent;
