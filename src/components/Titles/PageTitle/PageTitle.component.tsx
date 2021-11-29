import { Component } from "react";
import "./PageTitle.css";

type PageTitleProperities = {
    title : string
};

type PageTitleStates = {

};

export class PageTitle extends Component<PageTitleProperities,PageTitleStates>{

    constructor(props : PageTitleProperities) {
        super(props);

    }

    render() {

        return (
            <div className='page-title-container'>
                    <div className='page-title'>{this.props.title}</div>
            </div>
        );

    }

}

export default PageTitle;