import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componenets/header/header.jsx';
import Body from '../app/componenets/body/body.jsx';
import Building from '../app/componenets/building/building.jsx';
import Footer from './componenets/footer/footer.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Button>dfsdfsd</Button>
                <Header/>
                <Switch>
                    <Route path="/building/:id" render={Building}/>
                    <Route component={Body}/>
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