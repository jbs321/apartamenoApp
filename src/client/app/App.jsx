import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// import Footer from "./componenets/footer/footer.jsx";
import axios from 'axios';
import Body from "./componenets/Body/body.jsx";
import Building from "./componenets/Building/building.jsx";

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
        return (
            <div className="App">
                <Switch>
                    <Route path="/building/:address" render={(props) => <Building {...props} buildings={this.state.buildings}/>}/>
                    <Route render={(props) => <Body {...props} auth={this.props.auth} buildings={this.state.buildings}/>}/>
                </Switch>
            </div>
        );
    }
}