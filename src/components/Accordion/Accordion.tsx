import { Component } from "react";
import "./Accordion.css";
import { ReactComponent as ArrowIcon }  from "../../icons/arrow.svg";
type AccordionProperities = {
  titleContent: any;
  mainContent: any;
};

type AccordionStates = {
  expanded: boolean;
};

export class Accordion extends Component<
  AccordionProperities,
  AccordionStates
> {
  constructor(props: AccordionProperities) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  _toggleContainer() {
    this.setState({ expanded: !this.state.expanded });
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
        <div className="accordion-title" onClick={ () => this._toggleContainer() }>
          <div className="accordion-title-content">
          <div className="accordion-expand-icon-container">
           <ArrowIcon className='accordion-expand-icon' fill='cyan' />  
           </div>{this.props.titleContent}</div>
           </div>
           <div className="accordion-content">{this.props.mainContent}</div>
        
      </div>
    );
  }
}

export default Accordion;
