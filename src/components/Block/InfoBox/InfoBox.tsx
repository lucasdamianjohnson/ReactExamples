import { Component } from "react";
import "./InfoBox.css";

type InfoBoxProperities = {
    content : any;
};

type InfoBoxStates = {

};

export class InfoBox extends Component<InfoBoxProperities,InfoBoxStates>{

    constructor(props : InfoBoxProperities) {
        super(props);

    }

    render() {

        return (
            <div className='info-box'>
                {this.props.content}
            </div>
        );

    }

}

export default InfoBox;