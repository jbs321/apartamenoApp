import React from 'react';
import StreetView from '../StreetView.jsx';
import MapsView from '../MapsView.jsx';
import PricingGraph from '../../Presentation/Building/PricingGraph.jsx';
import CommentSection from "../Comment/CommentSection.jsx";
import TextHeader from "../TextHeader.jsx";

export default class Building extends React.Component {
    constructor() {
        super();
        this.getCommentsSection = this.getCommentsSection.bind(this);
    }

    getCommentsSection() {
        return (this.props.building._id !== undefined) ? (
            <section className="comments">
                <CommentSection building={this.props.building}/>
            </section>
        ) : null;
    }

    render() {
        return (
            <div className="building container">
                <section className="images row">
                    <StreetView className={"street-view-image col-lg-6"}
                                lat={this.props.building._lat}
                                lng={this.props.building._lng}
                                style={{
                                    height: '400px',
                                    backgroundColor: '#eeeeee'
                                }}/>

                    <TextHeader value="This is a header example" className={"col-lg-6"}/>

                    <PricingGraph building={this.props.building}/>

                    <TextHeader value="This is a header example" className={"col-lg-6"}/>

                    <div className={"col-lg-6"}>
                    <MapsView lat={this.props.building._lat}
                              lng={this.props.building._lng}
                              style={{
                                  width: "100%",
                                  height: '400px',
                                  position: 'relative',
                              }}
                              address={this.props.address}/>
                    </div>
                </section>

                <section className="comments col-lg-12" style={{paddingTop: 20}}>
                    {this.getCommentsSection()}
                </section>
            </div>
        );
    }
}