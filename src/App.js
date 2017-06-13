import React, {Component} from 'react';
import './App.css';
import Header from "./componenets/header/header";
import Footer from "./componenets/footer/footer";
import Body from "./componenets/body/body";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body/>
                <Footer />
            </div>
        );
    }
}

export default App;