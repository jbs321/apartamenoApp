import React from 'react';

export default class GoogleImg extends React.Component {
    constructor() {
        super();

        this.state = {
            src: "/public/img/not_found.jpg",
        };
    }

    componentDidMount() {
        if(this.props.src !== undefined) {
            this.setState({
                src: this.props.src,
            });
        }
    }

    handleError(image) {
        image.target.src = "/public/img/not_found.jpg";
    }

    render() {
        return (<img onError={this.handleError.bind(this)} src={process.env.ENV.API_URL + "/google-images/" + this.state.src} className="img-responsive"/>);
    }
}