import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componenets/header/header.jsx';
import Body from '../app/componenets/body/body.jsx';
import Building from '../app/componenets/building/building.jsx';
import Footer from './componenets/footer/footer.jsx';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buildings: []
        };
    }

    //TODO:: change hard coded API Query to Global setting
    componentDidMount() {
        axios.get(`http://api.apartamento.ca/api/buildings`)
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
                <Header/>
                <Switch>
                    <Route path="/building/:id" render={(props) => <Building {...props} buildings={this.state.buildings} /> } />
                    <Route render={() => <Body buildings={this.state.buildings} />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));