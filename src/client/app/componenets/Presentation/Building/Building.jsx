import React from 'react';
import RatingSection from "../../Presentation/Rating/RatingSection.jsx";
import StreetView from '../StreetView.jsx';
import MapsView from '../MapsView.jsx';
import PricingGraph from '../../Presentation/Building/PricingGraph.jsx';

export default class Building extends React.Component {
    render() {
        return (
            <div className="building">
                <section className="images">
                    <StreetView className={"street-view-image"}
                                lat={this.props.building._lat}
                                lng={this.props.building._lng}
                                style={{
                                    height: '400px',
                                    backgroundColor: '#eeeeee'
                                }}/>

                    <PricingGraph />

                    <MapsView lat={this.props.building._lat}
                              lng={this.props.building._lng}
                              style={{
                                  width: "100%",
                              }}
                              address={this.props.address}/>
                </section>

                {/*<RatingSection building={this.props.building} style={{ margin: 0, padding: "20px", background: "#efefef" }}/>*/}

            </div>
        );
    }
}