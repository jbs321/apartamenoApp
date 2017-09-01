import React from 'react';
import GoogleImg from "../GoogleImg.jsx";
import MapsImage from '../MapsImage.jsx';


export default class Building extends React.Component {
    render() {
        return (
            <div className="container-fluid building-page" style={{padding: 0}}>
                <div className="img-section">
                    <GoogleImg src={this.props.address} />
                    <MapsImage address={this.props.address} width={300} height={300} zDepth={3}/>
                </div>

                <div className="col-12">

                    <h3 className="address">{this.props.address}</h3>
                </div>

                <div className="col-12 ratings-wrapper">
                    {this.props.ratings}
                </div>
            </div>
        );
    }
}