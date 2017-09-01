import React from 'react';
import LoggedButton from "./LoggedButton.jsx";
import NotLoggedButton from "./NotLoggedButton.jsx";
import Auth from '../Auth/Auth.jsx';

export default class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        if (Auth.isAuth()) {
            return (<LoggedButton auth={this.props.auth} itemHandle={this.props.itemHandle} {...this.props} />);
        } else {
            return (<NotLoggedButton auth={this.props.auth} itemHandle={this.props.itemHandle} {...this.props}/>);
        }
    }
};