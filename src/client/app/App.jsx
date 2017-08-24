import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import Profile from "./componenets/Profile/Profile.jsx";
import Rating from "./componenets/Rating/Rating.jsx";
import Auth from './componenets/Auth/Auth.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: Auth.isAuth(),
        };
    }

    render() {
        console.log(Auth.isAuth());
        return (
            <div className="App">
                    <Switch>
                        <Route path="/profile" render={(props) => (
                            Auth.isAuth()
                            ? ( <Profile /> )
                            : ( <Redirect to="/"/> )
                        )} />
                        <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                        <Route render={(props) => <Body {...this.props} />}/>
                    </Switch>
                    <Footer/>
            </div>
        );
    }
}