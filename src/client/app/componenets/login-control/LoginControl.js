import React, {Component} from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = null;//<button onClick={this.handleLogoutClick}>LogOut</button>;
        } else {
            button = <button onClick={this.handleLoginClick}>LogIn</button>;
        }

        return (button);
    }
}

export default LoginControl;