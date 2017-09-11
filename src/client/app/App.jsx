import React from 'react';
import {
    Redirect,
    Switch,
    Route
} from 'react-router-dom';
import Auth from './componenets/Auth/Auth.jsx';
import Placeholder from './componenets/Presentation/Placeholder/Placeholder.jsx';
import Footer from "./componenets/Presentation/Footer/Footer.jsx";
import HomePage from "./componenets/Pages/HomePage.jsx";
import BuildingPage from "./componenets/Pages/BuildingPage.jsx";
import RegisterPage from "./componenets/Pages/RegisterPage.jsx";
import ProfilePage from "./componenets/Pages/ProfilePage.jsx";
import LoginPage from "./componenets/Pages/LoginPage.jsx";


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: Auth.isAuth(),
        };
    }

    render() {
        return (
            <div className="App" style={{height:"100%"}}>
                <Switch>
                    <Route path="/profile"
                           render={() => (Auth.isAuth() ? ( <ProfilePage/> ) : ( <Redirect to="/"/> ))}/>
                    <Route path="/placeholder"
                           render={() => <div style={{width: 500, height: 500}}><Placeholder/></div>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/register" render={() => <RegisterPage/>}/>
                    <Route path="/building/:address"
                           render={(props) => <BuildingPage address={props.match.params.address}/>}/>
                    <Route render={(props) => <HomePage {...this.props} />}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}