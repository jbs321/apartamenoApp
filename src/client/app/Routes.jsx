import React from 'react';
import {Redirect, BrowserRouter, Route} from 'react-router-dom';
import Auth from "./componenets/Auth/Auth.jsx";
import Callback from "./componenets/Callback/Callback.jsx";
import App from "./App.jsx";
import history from "./History.jsx";
import {MuiThemeProvider} from 'material-ui/styles';
import Profile from "./componenets/Profile/Profile.jsx";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <MuiThemeProvider>
                <div>
                    {/*<Route path="/profile"  render={(props) => ( !auth.isAuthenticated() ? ( <Redirect to="/"/> ) : ( <Profile auth={auth} {...props} /> ) )} />*/}
                    <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback {...props} /> }}/>
                    <Route path="/"         render={(props) => <App auth={auth} {...props} />} />
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}