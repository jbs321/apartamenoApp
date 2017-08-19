import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import Profile from "./componenets/Profile/Profile.jsx";
import Rating from "./componenets/Rating/Rating.jsx";

import LoginButton from "./componenets/Header/LoginButton.jsx";
import AppBar from 'material-ui/AppBar';
import {LEGGED_MENU_ITEMS} from "./componenets/Header/Variables.jsx";
import history from './History.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);

        const {isAuthenticated} = props.auth;

        this.state = {
            logged: isAuthenticated(),
        };
    }

    handleNavigation(event, keyboardFocused) {
        let key = parseInt(keyboardFocused.key);

        switch (key) {
            case LEGGED_MENU_ITEMS.LOGIN:
                // this.props.auth.login();
                break;
            case LEGGED_MENU_ITEMS.LOGOUT:
                // this.props.auth.logout();
                break;
            case LEGGED_MENU_ITEMS.PROFILE:
                history.push('/profile');
                break;
            default:
                console.log("KEY: " + key);
                break;
        }
    }

    render() {
        return (
            <div className="App">
                <AppBar style={{color: "green",background: "inherit"}}
                        iconElementRight={<LoginButton auth={this.props.auth} itemHandle={this.handleNavigation.bind(this)}/>}
                        showMenuIconButton={false}/>
                <Switch>
                    <Route path="/profile"  render={() => ( !this.props.auth.isAuthenticated() ? ( <Redirect to="/"/> ) : ( <Profile {...this.props}/> ) )} />
                    <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                    <Route path="/star" render={() => <Rating />}/>
                    <Route render={(props) => <Body {...this.props} />}/>
                </Switch>
                
                <Footer/>
            </div>
        );
    }
}