import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import ProfileContainer from "./componenets/Profile/ProfileContainer.jsx";
import Auth from './componenets/Auth/Auth.jsx';
import RegisterContainer from "./componenets/Form/RegisterContainer.jsx";
import Header from "./componenets/Header/Header.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: Auth.isAuth(),
        };
    }

    render() {
        return (
            <div className="App">
                <Header {...this.props} auth={this.props.auth}/>

                <Switch>
                    <Route path="/profile" render={(props) => (
                        Auth.isAuth()
                            ? ( <ProfileContainer/> )
                            : ( <Redirect to="/"/> )
                    )}/>
                    <Route path="/register" render={(props) => <RegisterContainer {...props}/>}/>
                    <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                    <Route render={(props) => <Body {...this.props} />}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}