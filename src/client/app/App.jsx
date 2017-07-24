import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import Footer from "./componenets/Footer/footer.jsx";
import axios from 'axios';
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";
import Profile from "./componenets/Profile/Profile.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildings: []
        };
    }

    componentDidMount() {
        axios.get(process.env.ENV.API_URL + '/buildings')
            .then(res => {
                const buildings = res.data;
                this.setState({
                    buildings: buildings
                });
            });
    }

    render() {
        const auth  = this.props.auth;
        return (
            <div className="App">
                <Switch>
                    <Route path="/profile"  render={(props) => ( !auth.isAuthenticated() ? ( <Redirect to="/"/> ) : ( <Profile auth={auth} {...props} /> ) )} />
                    <Route path="/building/:address" render={(props) => <Building {...props} buildings={this.state.buildings}/>}/>
                    <Route render={(props) => <Body {...props} auth={this.props.auth} buildings={this.state.buildings}/>}/>
                </Switch>
                
                <Footer/>
            </div>
        );
    }
}