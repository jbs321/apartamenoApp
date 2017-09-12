import React from 'react';
import ReactStreetview from 'react-streetview';

export default class StreetView extends React.Component {

    render() {
        if(this.props.lat === undefined || this.props.lng === undefined) {
            return <div className={this.props.className} style={this.props.style}>Loading Street View</div>;
        }

        // see https://developers.google.com/maps/documentation/javascript
        const googleMapsApiKey = process.env.ENV.GOOGLE_STREET_VIEW_SECRET;

        // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
        const streetViewPanoramaOptions = {
            position: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.lng)
            },
            pov: {heading: 100, pitch: 0},

        };

        return (
            <div className={this.props.className}
                  style={this.props.style}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
        );
    }
}