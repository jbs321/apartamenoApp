import React, { Component } from 'react';
import '../../App.css';
import Menu from "../menu/menu";
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Welcome to Apartamento</h1>
                <Menu/>
            </header>
        );
    }
}

export default Header;
