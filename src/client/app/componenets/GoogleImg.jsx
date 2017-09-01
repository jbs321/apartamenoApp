import React from 'react';

export default class GoogleImg extends React.Component {
    constructor() {
        super();

        this.state = {
            src: "/public/img/not_found.jpg",
        };
    }

    componentDidMount() {
        if(this.props.src !== undefined || this.props.src.includes("not_found.jpg")) {
                this.setState({
                src: process.env.ENV.API_URL + "/street-view/" + this.props.src,
            });
        }
    }

    handleError(image) {
        image.target.src = "/public/img/not_found.jpg";

        this.setState({
            src: "/public/img/not_found.jpg",
        });

        return false;
    }

    render() {
        return (<img onError={this.handleError.bind(this)}
                     src={this.state.src}
                     className={this.props.className}
                     style={{
                         maxHeight: "800px"
                     }}
        />);
    }
}