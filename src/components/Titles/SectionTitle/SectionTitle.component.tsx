import { Component } from "react";
import "./SectionTitle.css";

type SectionTitleProperities = {
    title : string
};

type SectionTitleStates = {

};

export class SectionTitle extends Component<SectionTitleProperities,SectionTitleStates>{

    constructor(props : SectionTitleProperities) {
        super(props);

    }

    render() {

        return (
                    <div className='section-title'>{this.props.title}</div>
        );

    }

}

export default SectionTitle;