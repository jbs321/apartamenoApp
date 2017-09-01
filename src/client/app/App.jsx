import React from 'react';
import {
    Redirect,
    Switch,
    Route
} from 'react-router-dom';
import Auth from './componenets/Auth/Auth.jsx';
import Body from "./componenets/Body/body.jsx";
import Footer from "./componenets/Footer/footer.jsx";
import HeaderContainer from "./componenets/Header/HeaderContainer.jsx";
import Building from "./componenets/Building/building.jsx";
import ProfileContainer from "./componenets/Profile/ProfileContainer.jsx";
import RegisterContainer from "./componenets/Form/RegisterContainer.jsx";
import TopMenuContainer from './componenets/Header/TopMenuContainer.jsx'
import MapsImage from './componenets/MapsImage.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: Auth.isAuth(),
        };
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/profile" render={(props) => (
                        Auth.isAuth()
                            ? ( <ProfileContainer/> )
                            : ( <Redirect to="/"/> )
                    )}/>
                    <Route path="/login" render={(props) => <Login {...props}/>}/>
                    <Route path="/register" render={(props) => <RegisterContainer {...props}/>}/>
                    <Route path="/building/:address" render={(props) => <Building {...props}/>}/>
                    <Route render={(props) => <Body {...this.props} />}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}