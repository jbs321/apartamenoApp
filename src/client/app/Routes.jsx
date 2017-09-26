import React from 'react';
import {
    Switch,
    Route,
    Router
} from 'react-router-dom';
import VisitorApp from "./VisitorApp.jsx";
import history from "./History.jsx";
import {MuiThemeProvider} from 'material-ui/styles';
import RegisteredApp from "./RegisteredApp.jsx";
import NotFound from "./NotFound.jsx";
import Help from "./Help.jsx";
import ContactUs from "./ContactUs.jsx";
import FAQ from "./FAQ.jsx";



export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <MuiThemeProvider>
                <div className="app-container" classID="app-container" style={{height: "100%"}}>
                    <Switch>
                        {/*Static Pages*/}
                        <Route path="/help" render={() => <Help/>}/>
                        <Route path="/faq" render={() => <FAQ/>}/>
                        <Route path="/contact-us" render={() => <ContactUs/>}/>
                        <Route path="/not-found" render={() => <NotFound/>}/>

                        {/*for registered users*/}
                        <Route path="/panel" render={() => <RegisteredApp/>}/>

                        {/*for unregistered users*/}
                        <Route path="/"      render={() => <VisitorApp/>}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        </Router>
    );
};