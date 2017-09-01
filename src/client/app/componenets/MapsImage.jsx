import React from 'react';

export default class MapsImage extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.address === undefined) {
            throw new Error('missing address for MapsViewImage component');
        }

        let path = this.findPathByAdderss(this.props.address);

        if (path === undefined) {
            throw new Error("path not found");
        }
        this.state = {
            imgSrc: path,
        };
    }

    findPathByAdderss(address) {
        let apiPath = process.env.ENV.API_URL;
        let mapsApiPrefix = "static-map";
        let path = apiPath.concat("/", mapsApiPrefix, "/", this.props.address);

        if (this.props.width !== undefined
            && this.props.height !== undefined) {
            path = path.concat("/", this.props.width, "/", this.props.height);
        }

        return path;
    }

    handleError(image) {
        image.target.src = "/public/img/not_found.jpg";

        this.setState({
            src: "/public/img/not_found.jpg",
        });

        return false;
    }

    render() {
        return (
            <img src={this.state.imgSrc}
                 onError={this.handleError.bind(this)}
                 className="maps-image"/>
        );
    }
}