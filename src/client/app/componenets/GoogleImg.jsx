import React from 'react';

export default class GoogleImg extends React.Component {
    render() {
        console.log(this);
        return (<img src={process.env.ENV.API_URL + "/google-images/" + this.props.src} className="img-responsive"/>);
    }
}