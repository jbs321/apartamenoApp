import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./componenets/Pages/HomePage/HomePage";
import BuildingPage from "./componenets/Pages/BuildingPage/BuildingPage";
import RegisterPage from "./componenets/Pages/RegisterPage.jsx";
import ProfilePage from "./componenets/Pages/ProfilePage.jsx";
import LoginPage from "./componenets/Pages/LoginPage.jsx";
import UserPanelPage from "./componenets/Pages/PanelPage.jsx";
import {connect} from 'react-redux';
import {fetchUserProfile} from './actions/UserProfileAction';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="page-container">
                    <Switch>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/panel" component={UserPanelPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/building/:address" component={BuildingPage}/>
                        <Route component={HomePage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default connect(null, {fetchUserProfile})(App);