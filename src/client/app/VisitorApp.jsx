import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./componenets/Pages/HomePage/HomePage.jsx";
import BuildingPage from "./componenets/Pages/BuildingPage/BuildingPage.jsx";
import RegisterPage from "./componenets/Pages/RegisterPage.jsx";
import LoginPage from "./componenets/Pages/LoginPage.jsx";

const appStyle = {height: "100%"};

export default class VisitorApp extends React.Component {
    render() {
        return (
            <div className="app visitor-app" style={appStyle}>
                <div className="page-container">
                    <Switch>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path="/register" render={() => <RegisterPage/>}/>
                        <Route path="/building/:address" render={(props) => <BuildingPage address={props.match.params.address}/>}/>

                        {/*Main Page*/}
                        <Route render={(props) => <HomePage/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}