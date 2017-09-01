import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import Body from "./componenets/Body/body.jsx";
import BuildingContainer from "./componenets/Building/BuildingContainer.jsx";
import ProfileContainer from "./componenets/Profile/ProfileContainer.jsx";
import Auth from './componenets/Auth/Auth.jsx';
import RegisterContainer from "./componenets/Form/RegisterContainer.jsx";
import TopMenuContainer from './componenets/Header/TopMenuContainer.jsx'
import MapsImage from './componenets/MapsImage.jsx'

export default class App extends React.Component {
    render() {
        let address="bat yam eli cohen 22";
        return (
            <div className="App">
                <TopMenuContainer/>
                <Switch>
                    <Route path="/test" render={() => (<MapsImage address={address}/>)}/>
                    <Route path="/profile" render={(props) => (
                        (Auth.isAuth() ? ( <ProfileContainer /> ) : ( <Redirect to="/"/> ))
                    )}/>
                    <Route path="/register" render={() => (<RegisterContainer />)}/>
                    <Route path="/building/:address" render={(props) => (<BuildingContainer {...props}/>)}/>
                    <Route render={(props) => <Body />}/>

                </Switch>
                <Footer/>
            </div>
        );
    }
}