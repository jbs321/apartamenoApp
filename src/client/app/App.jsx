import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import Profile from "./componenets/Profile/Profile.jsx";

export default class App extends Component {

    render() {
        const auth  = this.props.auth;
        return (
            <div className="App">
                <Switch>
                    <Route path="/profile"  render={(props) => ( !auth.isAuthenticated() ? ( <Redirect to="/"/> ) : ( <Profile {...props} auth={auth} /> ) )} />
                    <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                    <Route render={(props) => <Body {...this.props} />}/>
                </Switch>
                
                <Footer/>
            </div>
        );
    }
}