import React from 'react';
import {render} from 'react-dom';
import Header from './componenets/header/header.jsx';
import Body from '../app/componenets/body/body.jsx';
import Footer from './componenets/footer/footer.jsx';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Body />
                <Footer />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));