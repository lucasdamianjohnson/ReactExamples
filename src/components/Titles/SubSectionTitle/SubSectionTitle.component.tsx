import { Component } from "react";
import "./SubSectionTitle.css";

type SectionTitleProperities = {
    title : string
};

type SectionTitleStates = {

};

export class SubSectionTitle extends Component<SectionTitleProperities,SectionTitleStates>{

    constructor(props : SectionTitleProperities) {
        super(props);

    }

    render() {

        return (
                    <div className='sub-section-title'>{this.props.title}</div>
        );

    }

}

export default SubSectionTitle;