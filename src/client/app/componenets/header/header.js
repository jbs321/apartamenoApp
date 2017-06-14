import React, {Component} from 'react';
import Menu from "../menu/menu";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Menu/>
            </header>
        );
    }
}

export default Header;
