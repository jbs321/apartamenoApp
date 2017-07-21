import React, {Component} from 'react';
import Header from "./componenets/header/header.jsx";
import {Switch, Route} from 'react-router-dom';
// import Footer from "./componenets/footer/footer.jsx";
import axios from 'axios';
import Body from "./componenets/body/body.jsx";
import Building from "./componenets/building/building.jsx";

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
                <Header {...this.props}/>
                <Switch>
                    <Route path="/building/:address" render={(props) => <Building {...props} buildings={this.state.buildings}/>}/>
                    <Route render={() => <Body buildings={this.state.buildings}/>}/>
                </Switch>
                {/*<Footer/>*/}
            </div>
        );
    }
}