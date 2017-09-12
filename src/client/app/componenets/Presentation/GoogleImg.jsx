import React from 'react';

export default class GoogleImg extends React.Component {
    constructor() {
        super();

        this.state = {};
        this.state.src = "/public/img/not_found.jpg";
    }

    componentDidMount() {
        let that = this;

        if (that.props.src !== undefined || that.props.src.includes("not_found.jpg")) {
            that.setState({
                src: process.env.ENV.API_URL + "/street-view/" + that.props.src,
                afterRender: true,
            });
        }

    }

    handleError() {
        this.setState({src: "/public/img/not_found.jpg"});
        return false;
    }

    render() {
        return (
                <img onError={this.handleError.bind(this)}
                     src={this.state.src}
                     className={this.props.className}
                     style={this.props.style}/>
        );
    }
}