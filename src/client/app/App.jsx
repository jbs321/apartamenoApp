import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import Profile from "./componenets/Profile/Profile.jsx";
import LoginButton from "./componenets/Header/LoginButton.jsx";
import AppBar from 'material-ui/AppBar';
import {LEGGED_MENU_ITEMS} from "./componenets/Header/Variables.jsx";
import history from './History.jsx'

const appBarStyle = {
    "background": "inherit",
    color: "green"
};

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
                this.props.auth.login();
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
        const auth  = this.props.auth;
        return (
            <div className="App">
                <AppBar style={appBarStyle}
                        iconElementRight={<LoginButton {...this.props} itemHandle={this.handleNavigation.bind(this)}/>}
                        showMenuIconButton={false}/>
                <Switch>
                    <Route path="/profile"  render={(props) => ( !auth.isAuthenticated() ? ( <Redirect to="/"/> ) : ( <Profile {...props} /> ) )} />
                    <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                    <Route render={(props) => <Body {...this.props} />}/>
                </Switch>
                
                <Footer/>
            </div>
        );
    }
}