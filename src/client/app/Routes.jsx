import React from 'react';
import {Route, Router} from 'react-router-dom';
import Auth from "./componenets/Auth/Auth.jsx";
import App from "./App.jsx";
import history from "./History.jsx";
import {MuiThemeProvider} from 'material-ui/styles';
import Callback from "./componenets/Presentation/Callback/Callback.jsx";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/code/.test(nextState.location.search)) {
        let url = new URL(window.location.href);
        let code = url.searchParams.get("code");
        auth.handleAuthentication(code);
    } else {
        throw new Error('code missing');
    }
};

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <MuiThemeProvider>
                <div className="app-container" classID="app-container" style={{height:"100%"}}>
                    <Route path="/" render={(props) => <App/>}/>
                    <Route path="/callback" render={(props) => {
                        //entry point to authentication response from api
                        handleAuthentication(props); return <Callback/>
                    }}/>
                </div>
            </MuiThemeProvider>
            </Router>
    );
};