import { Component } from "react";
import "./Accordion.css";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
type AccordionProperities = {
  titleContent: any;
  mainContent: any;
};

type AccordionStates = {
  expanded: boolean;
  height: string;
  contentElement: HTMLDivElement | null;
};

export class Accordion extends Component<
  AccordionProperities,
  AccordionStates
> {
  expanding = false;
  constructor(props: AccordionProperities) {
    super(props);
    this.state = {
      expanded: false,
      height: "0px",
      contentElement: null,
    };
  }

  componentDidUpdate = (
    prevProps: AccordionProperities,
    prevState: AccordionStates
  ) => {
    if (prevState.height === "auto" && this.state.height !== "auto") {
      setTimeout(() => this.setState({ height: "0px" }), 1);
    }
  };

  _setContentDiv = (div: HTMLDivElement) => {
    this.setState({ contentElement: div });
  };

  _afterExpand() {
    if (this.state.expanded) {
      this.setState({ height: "auto" });
      this.expanding = false;
    }
  }

  _toggleContainer() {
    if(this.expanding)return;
    if (!this.state.contentElement) return;

    if(!this.state.expanded){
      this.expanding = true;
    }

    this.setState({
      expanded: !this.state.expanded,
      height: this.state.contentElement.scrollHeight + "px",
    });
  }

  _getAccordionClass() {
    let returnClass = "accordion-container default";

    if (this.state.expanded) {
      returnClass += " expanded";
    }

    return returnClass;
  }

  render() {
    return (
      <div className={this._getAccordionClass()}>
        <div
          className="accordion-title"
          onClick={() => this._toggleContainer()}
        >
          <div className="accordion-title-content">
            <div className="accordion-expand-icon-container">
              <ArrowIcon className="accordion-expand-icon" fill="cyan" />
            </div>
            {this.props.titleContent}
          </div>
        </div>
        <div
          ref={this._setContentDiv}
          onTransitionEnd={() => this._afterExpand()}
          style={{
            height: this.state.height,
            overflow: "hidden",
            transition: "height .25s 0s",
          }}
          className="accordion-content"
        >
          {this.props.mainContent}
        </div>
      </div>
    );
  }
}

export default Accordion;
