import React from 'react';
import Logged from "./LoggedButton.jsx";
import NotLoggedButton from "./NotLoggedButton.jsx";

export default class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        if (isAuthenticated()) {
            return (<Logged auth={this.props.auth} itemHandle={this.props.itemHandle} {...this.props} />);
        } else {
            return (<NotLoggedButton auth={this.props.auth} {...this.props}/>);
        }
    }
};