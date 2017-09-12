import React from 'react';
import RatingSection from "../../Presentation/Rating/RatingSection.jsx";
import StreetView from '../StreetView.jsx';
import MapsView from '../MapsView.jsx';
import PricingGraph from '../../Presentation/Building/PricingGraph.jsx';
import CommentSection from "../Comment/CommentSection.jsx";

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
            <div className="building">
                {/*<section className="images">*/}
                {/*<StreetView className={"street-view-image"}*/}
                {/*lat={this.props.building._lat}*/}
                {/*lng={this.props.building._lng}*/}
                {/*style={{*/}
                {/*height: '400px',*/}
                {/*backgroundColor: '#eeeeee'*/}
                {/*}}/>*/}

                {/*<PricingGraph />*/}

                {/*<MapsView lat={this.props.building._lat}*/}
                {/*lng={this.props.building._lng}*/}
                {/*style={{*/}
                {/*width: "100%",*/}
                {/*}}*/}
                {/*address={this.props.address}/>*/}
                {/*</section>*/}

                {/*<RatingSection building={this.props.building} style={{ margin: 0, padding: "20px", background: "#efefef" }}/>*/}
                {/*<div style={{padding: "20px", margin: "auto", width: "1200px"}}>*/}
                {/*<div id="disqus_thread"></div>*/}
                {/*</div>*/}

                {this.getCommentsSection()}

            </div>
        );
    }
}