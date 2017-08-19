import React from 'react';
import LoggedButton from "./LoggedButton.jsx";
import NotLoggedButton from "./NotLoggedButton.jsx";

export default class LoginButton extends React.Component {
    render() {
        const {isAuthenticated} = this.props.auth;

        if (isAuthenticated()) {
            return (<LoggedButton auth={this.props.auth} itemHandle={this.props.itemHandle} {...this.props} />);
        } else {
            return (<NotLoggedButton auth={this.props.auth} {...this.props}/>);
        }
    }
};