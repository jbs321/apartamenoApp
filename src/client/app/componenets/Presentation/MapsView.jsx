import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapsView extends React.Component {
    render() {
        if (this.props.lat === undefined || this.props.lng === undefined) {
            return <div>Loading Map</div>;
        }

        const that = this;
        const zoom = (this.props.zoom !== undefined) ? this.props.zoom : 14;
        const google = (this.props.google !== undefined) ? this.props.google : 14;
        const initialCenter = {lat: parseFloat(that.props.lat), lng: parseFloat(that.props.lng)};

        return (
            <div className={this.props.className} style={this.props.style}>
                <Map clickableIcons={false} google={google} zoom={zoom} initialCenter={initialCenter} style={{height: '400px', position: 'relative'}}>
                    <Marker position={initialCenter}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.ENV.GOOGLE_MAPS_SECRET)
})(MapsView)