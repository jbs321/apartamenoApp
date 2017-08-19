import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Auth from "./componenets/Auth/Auth.jsx";
import Callback from "./componenets/Callback/Callback.jsx";
import App from "./App.jsx";
import history from "./History.jsx";
import {MuiThemeProvider} from 'material-ui/styles';
import axios from 'axios';
import { AUTH_CONFIG } from './componenets/Auth/Variables.jsx';

const auth = new Auth();

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <MuiThemeProvider>
                <div className="app">
                    {/*Call main App*/}
                    <Route path="/"         render={(props) => <App auth={auth} {...props} />} />
                    {/*Handle Authentication Callback*/}
                    <Route path="/callback" render={(props) => {auth.handleAuthentication(props); return null;}}/>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}