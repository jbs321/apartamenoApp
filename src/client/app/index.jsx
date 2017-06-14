import React from 'react';
import {render} from 'react-dom';
import Header from '../app/componenets/header/header';
import Body from '../app/componenets/body/body';
import Footer from '../app/componenets/footer/footer';

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