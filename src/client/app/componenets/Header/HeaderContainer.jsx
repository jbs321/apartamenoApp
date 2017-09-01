import React from 'react';
import AppBar from 'material-ui/AppBar';
import Search from "../Search/Search.jsx";
import history from "../../History.jsx"
import {LEGGED_MENU_ITEMS} from "./Variables.jsx";
import LoginButton from "./LoginButton.jsx";
import Auth from '../Auth/Auth.jsx';
import TopMenuContainer from './TopMenuContainer.jsx';

export default class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.logged = Auth.isAuth();

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(event, keyboardFocused) {
        let key = parseInt(keyboardFocused.key);

        switch (key) {
            case LEGGED_MENU_ITEMS.LOGIN:
                Auth.login();
                break;
            case LEGGED_MENU_ITEMS.LOGOUT:
                Auth.logout();
                break;
            case LEGGED_MENU_ITEMS.PROFILE:
                history.push('/profile');
                break;
            case LEGGED_MENU_ITEMS.REGISTER:
                history.push('/register');
                break;
            default:
                console.log(key);
                break;
        }
    }

    render() {
        return (
                <header className="header">
                    {/*<AppBar style={{color: "green",background: "inherit",}}*/}
                            {/*iconElementRight={*/}
                                {/*<LoginButton {...this.props} itemHandle={this.handleNavigation.bind(this)}/>*/}
                            {/*}*/}
                            {/*showMenuIconButton={false}/>*/}

                    <TopMenuContainer itemHandle={this.handleNavigation}/>

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