import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componenets/header/header.jsx';
import Body from '../app/componenets/body/body.jsx';
import Building from '../app/componenets/building/building.jsx';
import Footer from './componenets/footer/footer.jsx';
import axios from 'axios';
import Rating from './componenets/rating/rating.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';

//react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();

export default class App extends React.Component {

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
                <Rating />
                <Header buildings={this.state.buildings}/>
                <Switch>
                    <Route path="/building/:address"
                           render={(props) => <Building {...props} buildings={this.state.buildings}/> }/>

                    <Route render={()      => <Body buildings={this.state.buildings}/>}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));