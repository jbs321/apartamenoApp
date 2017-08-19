import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Search from "../Search/Search.jsx";
import history from "../../History.jsx"
import {LEGGED_MENU_ITEMS} from "./Variables.jsx";
import LoginButton from "./LoginButton.jsx";

const appBarStyle = {
    "background": "inherit",
    color: "green"
};

export default class Header extends Component {

    constructor(props) {
        super(props);
        const {isAuthenticated} = this.props.auth;

        this.state = {
            logged: isAuthenticated(),
        };
    }

    handleNavigation(event, keyboardFocused) {
        let key = parseInt(keyboardFocused.key);

        switch (key) {
            case LEGGED_MENU_ITEMS.LOGIN:
                window.location.href="http://passport.ca/oauth/authorize";
                // this.props.auth.login();
                break;
            case LEGGED_MENU_ITEMS.LOGOUT:
                this.props.auth.logout();
                break;
            case LEGGED_MENU_ITEMS.PROFILE:
                history.push('/profile');
                break;
            default:
                console.log(key);
                break;
        }
    }

    render() {
        return (
            <header className="header">
                <AppBar style={appBarStyle}
                        iconElementRight={<LoginButton {...this.props} itemHandle={this.handleNavigation.bind(this)}/>}
                        showMenuIconButton={false}/>

                <div className="header-banner"></div>

                <div className="header-spacer container">
                    <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Apartamento</h1>
                    <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Find all you need about Apartments, Buildings
                        and more.</h2>
                    <Search {...this.props}/>
                </div>
            </header>
        );
    }
}