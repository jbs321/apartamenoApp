import React, { Component } from 'react';
import './App.css';
import Header from "./componenets/header/header";
import Footer from "./componenets/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
